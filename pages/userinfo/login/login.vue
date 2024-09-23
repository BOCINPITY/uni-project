<template>
	<view class="login-container">
		<PageHeader info="用户登录"></PageHeader>
		<view class="login-bg">
			<image src="../../../static/login_bg.png" mode="aspectFit"></image>
		</view>
		<view class="login-content">
			<view class="login-tab">
				<view class="tab-item" :class="{active: type === 'account'}"  @click="type = 'account'">账号登录</view>
				<view class="tab-item" :class="{active: type !== 'account'}"  @click="type = 'phone'">手机登录</view>
			</view>
			<!-- 表单 -->
			<view class="login-form">
				<uni-forms :modelValue="formData" :rules="rules" ref="loginFormRef" validateTrigger="bind">
					<!-- 账号登录 -->
					<view v-if="type === 'account'">
						<uni-forms-item required   label="账号" name="account" class="login-form-item">
							<uni-easyinput  class="form-input"  v-model="formData.account" placeholder="请输入账号" trim="all" />
						</uni-forms-item>
						<uni-forms-item required  label="密码" name="password" class="login-form-item">
							<uni-easyinput  class="form-input" type="password" v-model="formData.password" placeholder="请输入密码"  trim="all"/>
						</uni-forms-item>
					</view>
					<!-- 手机登录 -->
					<view v-else="type === 'phone'">
						<uni-forms-item required  label="手机号" name="phone" class="login-form-item">
							<uni-easyinput  class="form-input" type="number" v-model="formData.phone" placeholder="请输入手机号"  trim="all"/>
						</uni-forms-item>
						<uni-forms-item required  label="验证码" name="vcode" class="login-form-item">
							<uni-easyinput  class="form-input"  type="text" v-model="formData.vcode" placeholder="请输入验证码"  trim="all"/>
							<SendCode class="vcode"></SendCode>
						</uni-forms-item>
					</view>
					<button class="login-btn" @click="handleLogin">马上登录</button>
				</uni-forms>
			</view>
		</view>
		<view class="login-footer">
			<text class="login-footer-item">注册</text>
			<text class="login-footer-item">忘记密码</text>
		</view>
		<button type="primary" @click="ADD">{{useCountStore.state.count}}</button>
	</view>
</template>

<script setup>
	import { rules } from '../../../verifyRules/login';
	import { computed, ref } from 'vue';
	import {useTopFit} from '../../../utils';
	import {onReady} from '@dcloudio/uni-app'
	import { login } from '../../../api/user';
	import { useCountStore } from '../../../store';
	const loginFormRef = ref()
	const {barHeight} = useTopFit()
	const type = ref('account')
	const formData = ref({account:'',password:'',phone:'',vcode:''})
	const ADD = () => {
		useCountStore.commit("increment")
	}
	const handleBack = () => {
		uni.navigateBack()
	}
	const handleLogin = async() => {
		const res = await loginFormRef.value.validate()
		const resp = await login({...res,type:type.value})
		if(resp){
			uni.navigateBack()
		}
	}
</script>

<style lang="scss" scoped>
@import "./css/login.scss"
</style>