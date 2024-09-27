<template>
	<view class="tag-container">
		<view class="info">
			{{labelItem.description}}
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
	labelItem:{
		type:Object,
		require:true
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
	emits("close",props.labelItem._id)
}
const handleClickAdd = () => {
	emits("add",props.labelItem._id)
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