<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<view class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}" @click="handleSearch">
				<uni-icons type="search" ></uni-icons>
				<view class="nav-bar-search-text">
					输入文章标题进行搜索
				</view>
			</view>
		</view>
		<view :style="{height:barHeight + 80 + 'rpx'}">
			<!--  -->
		</view>
	</view>
</template>

<script setup>
	const {statusBarHeight} = uni.getSystemInfoSync()
	let barHeight = statusBarHeight * 2 || 20
	let marginRight = 0
	// #ifdef MP-WEIXIN
	const menuinfo = uni.getMenuButtonBoundingClientRect()
	barHeight = menuinfo.top * 2
	marginRight = menuinfo.width * 2
	// #endif
	const handleSearch = () => {
		uni.navigateTo({
			url:"/pages/search/search",
		})
	}
</script>

<style lang="scss">
	@import "./css/NavBar.scss";
</style>