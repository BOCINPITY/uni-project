<!-- 文章列表组件 -->
<template>
	<swiper class="swiper-container" @change="swiperChange" :current="activeIndex">
		<swiper-item v-for="item in labelList" :key="item._id">
			<view class="swiper-item">
				<ArticleItem :aticleList="currentTab.value === '全部' ? aticleList : _showAticleList"></ArticleItem>
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
	const props = defineProps({
		activeIndex: Number,
		labelList: Array,
		currentTab: Object
	})
	const aticleList = ref([])
	const _showAticleList = ref([])
	const emit = defineEmits(['activeIndexchange'])
	const swiperChange = async ({
		detail
	}) => {
		emit('activeIndexchange', detail.current)
	}
	watch(() => props.currentTab.value, (newValue, oldValue) => {
		_showAticleList.value = []
		aticleList.value.forEach(item => {
			if (item.classify === newValue) {
				_showAticleList.value.push(item)
			}
		})
	})
	onBeforeMount(async () => {
		uni.showToast({
			icon: "loading"
		})
		const {
			result
		} = await uniCloud.callFunction({
			name: "article_get_list",
		})
		uni.hideToast()
		aticleList.value = result.res
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