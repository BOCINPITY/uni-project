<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" v-for="(item,index) in labelList" :key="index"
					:class="{active:activeIndex === index}" @click="handleTabItemClick(index)">
					{{item.description}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons" @click="clickLabelAdmin">
			<uni-icons type="gear" size="30" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	import {ref } from 'vue';
	import { useUserStore } from '@/store/user';
	const {isLogin} = useUserStore()
	const  props = defineProps({
		activeIndex:Number,
		labelList:Array
	})
	const emit = defineEmits(['activeIndexchange'])
	const handleTabItemClick = (index) => {
		emit('activeIndexchange',index)
	}
	const clickLabelAdmin = async () => {
		await isLogin()
		uni.navigateTo({url:"/pages/labelAdmin/labelAdmin"})
	}
</script>

<style lang="scss" scoped>
	@import "./css/TabBar.scss";
</style>