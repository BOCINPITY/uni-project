<template>
	<view class="search-container">
		<view class="searche-header">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<uni-icons type="left" color="#FFFFFF" @click="handleBack"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	const {
		statusBarHeight
	} = uni.getSystemInfoSync()
	let barHeight = statusBarHeight * 2 || 0

	// #ifdef MP-WEIXIN
	const menuinfo = uni.getMenuButtonBoundingClientRect()
	barHeight = menuinfo.top * 2
	// #endif

	const handleBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
	.searche-header {
		background-color: $uni-bg-color;
		padding: 20rpx;
	}
</style>