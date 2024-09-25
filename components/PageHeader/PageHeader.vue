<template>
	<view class="container">
		<view class="header">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<view class="header-content">
				<view class="back-icon"> <uni-icons type="left" color="#FFFFFF" @click="handleBack" size="24"></uni-icons></view>
				<view class="info">{{info}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { useTopFit } from '@/utils';
	const {barHeight} = useTopFit()
	const handleBack = () => {
		uni.navigateBack()
	}
	const props = defineProps({
		info:String
	})
</script>

<style lang="scss">
	.container {
		width: 100%;
		@include flex(flex-start,column);
		.header {
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
					font-size: $uni-font-size-slg;
					color: white;
					@include flex(center);
				}
			}
		}
	}
</style>