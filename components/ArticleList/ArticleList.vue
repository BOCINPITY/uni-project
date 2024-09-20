<!-- 文章列表组件 -->
<template>
	<swiper class="swiper-container" @change="swiperChange" :current="activeIndex">
		<swiper-item v-for="(item,index) in labelList" :key="item._id">
			<view class="swiper-item">
				<ArticleItem :loadStatus="loadStatus" :aticleList="aticleDataList[activeIndex]"
					@loadMore="loadMoreData"></ArticleItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script setup>
	import {
		onBeforeMount,
		ref,
		watch
	} from 'vue';
	import {
		getArticleList
	} from '../../api/article';
	const props = defineProps({
		activeIndex: Number,
		labelList: Array,
		classify: String
	})
	const loadData = ref({})
	const aticleDataList = ref({})
	const loadStatus = ref("loding")
	const pageSize = ref(3)
	const emit = defineEmits(['activeIndexchange'])
	const swiperChange = async ({
		detail
	}) => {
		emit('activeIndexchange', detail.current)
	}
	watch(() => props.classify, async (value, oldValue) => {
		if(!loadData.value[props.activeIndex]){
			loadData.value[props.activeIndex] = {
				page:1,
				loading:"loading",
				total:0
			}
		}
		if (!aticleDataList.value[props.activeIndex]) {
			uni.showToast({
				icon: "loading"
			})
			const {
				list,
				total
			} = await getArticleList(props.classify, pageSize.value, loadData.value[props.activeIndex].page)
			aticleDataList.value[props.activeIndex] = list
			loadData.value[props.activeIndex].total = total
		}
		uni.hideToast()
	})
	const loadMoreData = async () => {
		console.log(aticleDataList.value[props.activeIndex].length)
		if (aticleDataList.value[props.activeIndex].length === loadData.value[props.activeIndex].total) {
			loadData.value[props.activeIndex].loading="no-more"
			return
		}
		loadData.value[props.activeIndex].loading = "loading"
		const {
			list,
			total
		} = await getArticleList(props.classify, pageSize.value, ++loadData.value[props.activeIndex].page)
		aticleDataList.value[props.activeIndex].push(...list)
		loadData.value[props.activeIndex].loading = "more"
	}
	onBeforeMount(async () => {
		if(!loadData.value[props.activeIndex]){
			loadData.value[props.activeIndex] = {
				page:1,
				loading:"loading",
				total:0
			}
		}
		const {
			list,
			total
		} = await getArticleList(props.classify, pageSize.value, loadData.value[props.activeIndex].page)
		aticleDataList.value[props.activeIndex] = list
		loadData.value[props.activeIndex].total = total
	})
</script>

<style lang="scss" scoped>
	.swiper-container {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>