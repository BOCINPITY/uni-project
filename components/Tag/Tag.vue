<template>
	<view class="tag-container">
		<view class="info">
			{{info}}
		</view>
		<view class="operation-icon" v-if="isShowClose" @click="handleClickClose">
			<uni-icons type="clear"  color="red" size="23"></uni-icons>
		</view>
		<view class="operation-icon" v-if="isShowAdd" @click="handleClickAdd">
			<uni-icons type="plus-filled"  color="green" size="23"></uni-icons>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	info:{
		type:String,
		default:"默认值"
	},
	isShowClose:{
		type:Boolean,
		default:false
	},
	isShowAdd:{
		type:Boolean,
		default:false
	}
})
const emits = defineEmits(["close","add"])
const handleClickClose = () => {
	emits("close")
}
const handleClickAdd = () => {
	emits("add")
}

</script>

<style lang="scss" scoped>

.tag-container{
	position: relative;
	.info{
		font-size: $uni-font-size-base;
		max-width: 200rpx;
		overflow: hidden;
		text-wrap: nowrap;
		text-overflow: ellipsis;
		border: 1px solid black;
		border-radius: $uni-border-radius-base;
		padding: $uni-spacing-col-sm $uni-spacing-col-lg;
	}
	.operation-icon{
		position: absolute;
		right: -$uni-spacing-col-sm * 4;
		top: -$uni-spacing-col-lg;
	}
}

</style>