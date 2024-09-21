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
	import {onBeforeMount,ref,watch} from 'vue';
	import {getArticleList} from '../../api/article';
	const props = defineProps({
		activeIndex: Number,
		labelList: Array,
		classify: String
	})
	const aticleDataList = ref({})
	const pageSize = ref(6)
	const current = ref({})
	const totals = ref({})
	const loadStatus = ref("more")
	const emit = defineEmits(['activeIndexchange'])
	const swiperChange = async ({detail}) => {
		emit('activeIndexchange', detail.current)
	}
	watch(() => props.classify, async (value, oldValue) => {
		// 切换分类的时候触发
		if (!aticleDataList.value[props.activeIndex]) { // 如果当前未存储这个分类下的数据，则进行请求
			loadStatus.value = "loading"
			const {list,total} = await getArticleList(props.classify, pageSize.value, 1)
			aticleDataList.value[props.activeIndex] = list
			loadStatus.value = (total <= pageSize.value) ? "no-more" : "more"
			current.value[props.activeIndex] = 1
			totals.value[props.activeIndex] = total
		}
	})
	const loadMoreData = async () => {
		const len = aticleDataList.value[props.activeIndex].length
		if(len === totals.value[props.activeIndex]){
			loadStatus.value = "no-more"
			return
		}else{
			loadStatus.value = "loading"
			const {list,total} = await getArticleList(props.classify, pageSize.value, ++current.value[props.activeIndex])
			aticleDataList.value[props.activeIndex].push(...list)
			loadStatus.value = "more"
		}
	}
	// 初次加载全部的数据
	onBeforeMount(async () => {
		loadStatus.value = "loading"
		const {list,total} = await getArticleList(props.classify, pageSize.value, 1)
		aticleDataList.value[props.activeIndex] = list
		loadStatus.value = (total <= pageSize.value) ? "no-more" : "more"
		current.value[props.activeIndex] = 1
		totals.value[props.activeIndex] = total
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