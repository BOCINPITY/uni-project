<template>
	<view v-if="isShow" class="empty-container" :style="{height:height}">
		<uni-icons type="info" size="40" color="#CCC"></uni-icons>
		<view class="text">
			当前没有数据
		</view>
	</view>
</template>

<script setup>
	defineProps({
		height:{
			type:String,
			default:'300rpx',
			require:false,
		},
		isShow:{
			type:Boolean,
			default:true
		}
	})
</script>

<style lang="scss" scoped>
.empty-container{
	@include flex(center,column);
	.text{
		color: #CCC;
		font-size: 40rpx;
	}
}
</style>