<template>
	<view class="search-container">
		<view class="search-header">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<view class="header-content">
				<view class="back-icon"> <uni-icons type="left" color="#FFFFFF" @click="handleBack"></uni-icons></view>
				<view class="info">搜索</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { useTopFit } from '../../utils';
	const {barHeight} = useTopFit()
	const handleBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
	.search-container {
		width: 100%;
		@include flex(flex-start,column);
		.search-header {
			width: 100%;
			align-items: flex-end;
			background-color: $uni-bg-color;
			padding: $uni-spacing-row-sm 0;
			.header-content{
				@include flex();
				.back-icon {
					padding: 0 $uni-spacing-row-sm;
				}
				.info {
					flex: 1;
					color: white;
					@include flex(center);
				}
			}
		}
	}
</style>