<template>
	<view class="login-container">
		<view class="login-header">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<view class="header-content">
				<view class="back-icon"> <uni-icons type="left" color="#FFFFFF" @click="handleBack"></uni-icons></view>
				<view class="info">用户登录</view>
			</view>
		</view>
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
				<uni-forms :modelValue="formData">
					<!-- 账号登录 -->
					<view v-if="type === 'account'">
						<uni-forms-item label="账号" name="account" class="login-form-item">
							<input placeholder-class="placeholder" class="form-input" type="text" v-model="formData.account" placeholder="请输入账号" />
						</uni-forms-item>
						<uni-forms-item label="密码" name="password" class="login-form-item">
							<input placeholder-class="placeholder" class="form-input"  type="safe-password" v-model="formData.password" placeholder="请输入密码" />
						</uni-forms-item>
					</view>
					<!-- 手机登录 -->
					<view v-else="type === 'phone'">
						<uni-forms-item label="手机号" name="phone" class="login-form-item">
							<input placeholder-class="placeholder" class="form-input" type="number" v-model="formData.phone" placeholder="请输入手机号" />
						</uni-forms-item>
						<uni-forms-item label="验证码" name="vcode" class="login-form-item">
							<input placeholder-class="placeholder" class="form-input"  type="text" v-model="formData.vcode" placeholder="请输入验证码" />
							<SendCode class="vcode"></SendCode>
						</uni-forms-item>
					</view>
					<button class="login-btn">马上登录</button>
				</uni-forms>
			</view>
		</view>
		<view class="login-footer">
			<text class="login-footer-item">注册</text>
			<text class="login-footer-item">忘记密码</text>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {useTopFit} from '../../../utils';
	const {barHeight} = useTopFit()
	const type = ref('account')
	const formData = ref(type.value === 'account'? {account:'',password:''} : {phone:'',vcode:''})
	const handleBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
@import "./css/login.scss"
</style>