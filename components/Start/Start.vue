<template>
	<view class="start-icon" @click.stop="handleStart">
		<uni-icons color="#0077FF" :type="heartType" size="20"></uni-icons>
	</view>

</template>

<script setup>
	const props = defineProps({
		heartType:{
			type:String,
			default:"heart",
		}
	})
	// const emits = defineEmits(["handleStart"])
	const handleStart = async() => {
		// todo:判断用户是否登录
		uni.navigateTo({url:"/pages/userinfo/login/login"})
	}
</script>

<style scoped>

</style>