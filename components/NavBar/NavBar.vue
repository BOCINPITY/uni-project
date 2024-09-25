<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<!-- 当组件作为搜索界面使用的时候 -->
			<view v-if="isSearch" class="return-icon" @click="handleBack">
				<uni-icons type="back" color="#FFF" size="24"></uni-icons>
			</view>

			<view class="nav-bar-content" :style="{marginRight:marginRight + 'rpx',marginLeft: isSearch ? '20rpx' : ''}" @click="handleSearch">
				<uni-icons type="search" ></uni-icons>
				<view v-if="!isSearch" class="nav-bar-search-text">
					输入文章标题进行搜索
				</view>

				<input v-else class="search-input" type="text" placeholder="输入文章标题进行搜索" />
				</view>
		</view>
		<view :style="{height:barHeight + 80 + 'rpx'}">
			<!--  -->
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { useTopFit } from '@/utils';
	const props = defineProps({
		isSearch:{
			type:Boolean,
			default:false
		}
	})
	const searchData = ref('')
	console.log(props.isSearch)
	const {barHeight,marginRight} = useTopFit()
	const handleSearch = () => {
		if(props.isSearch) return
		uni.navigateTo({
			url:"/pages/search/search",
		})
	}
	const handleBack = () => {
		// #ifdef H5
			uni.switchTab({
				url:"/pages/index/index"
			})
		// #endif
		// #ifndef H5
			uni.navigateBack()
		// #endif

	}
</script>

<style lang="scss" scoped>
	@import "./css/NavBar.scss";
</style>