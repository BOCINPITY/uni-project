<template>
	<view class="start-icon" @click.stop="handleStart">
		<uni-icons color="#0077FF" :type="heartType" size="20"></uni-icons>
	</view>

</template>

<script setup>
	import { useUserStore } from '@/store/user';
	import {storeToRefs} from "pinia";
	const props = defineProps({
		heartType:{
			type:String,
			default:"heart",
		}
	})
	
	const {info} = storeToRefs(useUserStore())
	const emits = defineEmits(["clickStart"])
	const handleStart = async() => {
		if(!info.value)
		// todo:判断用户是否登录
		uni.navigateTo({url:"/pages/userinfo/login/login"})
		emits("clickStart")
	}
</script>

<style scoped>

</style>