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
	
	const {isLogin} = useUserStore()
	const emits = defineEmits(["clickStart"])
	const handleStart = async() => {
		await isLogin()
		emits("clickStart")
	}
</script>

<style scoped>

</style>