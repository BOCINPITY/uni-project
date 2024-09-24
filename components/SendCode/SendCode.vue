<template>
	<view class="code-container">
		<view class="vcode-btn" @click="getCode">
			{{ isTimeout ? "获取验证码" : counter + "s"}}
		</view>
	</view>
</template>

<script setup>
	import {  ref } from 'vue';
	import { validatePhone } from '@/verifyRules/login';
import { userGetCode } from '../../api/user';
	const MS_1 = 1000
	const TIMEOUT = 120
	const isTimeout = ref(true)
	const props = defineProps({
		phoneForm:Object
	})
	let timer = null
	const counter = ref(TIMEOUT)
	const getCode = async() => {
		const {phone,vcode} = props.phoneForm
		if(!validatePhone(phone) || timer) return
		// 定时器
		isTimeout.value= false
		runTime()
		// 因为审核问题，短信验证码这部分先不做了
		
	}
	const runTime = () => {
		timer = setInterval(() => {
			if(counter.value === 1) {
				clearInterval(timer)
				timer = null
				isTimeout.value = true
				counter.value = TIMEOUT
				return
			}
			counter.value--
		},MS_1)
	}
</script>

<style lang="scss" scoped>
.code-container{
	.vcode-btn{
		background-color: $uni-color-primary;
		color: white;
		width: 160rpx;
		text-align: center;
		padding: $uni-spacing-col-base 0;
		border-radius: $uni-border-radius-base;
	}
}
</style>