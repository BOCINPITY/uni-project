<template>
	<!-- 基础卡片 -->
	<view class="list-card" v-if="item.mode === 'base'" @click="handleClickCard">
		<view class="list-card-header">
			<view class="list-card-title">
				{{item.title}}
			</view>
			<Start @clickStart="handleStart(item._id)" class="list-card-start" :heartType="isInUserStarts(item._id) ? 'heart-filled' : 'heart'"></Start>
		</view>
		<view class="list-card-content">
			<image class="list-card-image" :src="item.cover[0] ? item.cover[0] : '/static/logo.png'" mode="aspectFill">
			</image>
			<view class="list-card-description">
				{{item.description}}
			</view>
		</view>
		<view class="list-card-footer">
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-publish-time">
				<uni-icons style="padding: 0 10rpx;" type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons style="padding: 0 10rpx;" type="eye" size="20" color="#0077FF"></uni-icons>
				<view class="borws-count"> {{item.browse_count}}浏览</view>
			</view>
		</view>
	</view>
	<!-- 多图卡片 -->
	<view class="list-card mutiple" v-if="item.mode === 'mutiple'" @click="handleClickCard">
		<view class="list-card-header">
			<view class="list-card-title">
				{{item.title}}
			</view>
			<Start @clickStart="handleStart(item._id)" class="list-card-start" :heartType="isInUserStarts(item._id) ? 'heart-filled' : 'heart'"></Start>
		</view>
		<view class="list-card-content">
			<image class="list-card-image" v-for="(it,index) in item.cover" :src="it" :key="index" mode="aspectFill">
			</image>
			<view class="list-card-description">
				{{item.description}}
			</view>
		</view>
		<view class="list-card-footer">
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-publish-time">
				<uni-icons style="padding: 0 10rpx;" type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons style="padding: 0 10rpx;" type="eye" size="20" color="#0077FF"></uni-icons>
				<view class="borws-count"> {{item.browse_count}}浏览</view>
			</view>
		</view>
	</view>
	<!-- 大图卡片 -->
	<view class="list-card cover" v-if="item.mode === 'cover'" @click="handleClickCard">
		<view class="list-card-header">
			<view class="list-card-title">
				{{item.title}}
			</view>
			<Start @clickStart="handleStart(item._id)" class="list-card-start" :heartType="isInUserStarts(item._id) ? 'heart-filled' : 'heart'"></Start>
		</view>
		<view class="list-card-content">
			<image class="list-card-image" :src="item.cover[0] ? item.cover[0] : '/static/logo.png'" mode="aspectFill">
			</image>
			<view class="wapper"></view>
			<view class="list-card-description">
				{{item.description}}
			</view>
		</view>
		<view class="list-card-footer">
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-publish-time">
				<uni-icons style="padding: 0 10rpx;" type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons style="padding: 0 10rpx;" type="eye" size="20" color="#0077FF"></uni-icons>
				<view class="borws-count"> {{item.browse_count}}浏览</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { userUpdateStarts } from '../../api/user';
	import { useUserStore } from '../../store/user';
	import {storeToRefs} from "pinia"
	const {startsIds,userId} = storeToRefs(useUserStore())
	const props = defineProps({
		item: Object
	})
	const isInUserStarts = (id) => {
		if(startsIds.value){
			return startsIds.value.includes(id)
		}
	}
	const emits = defineEmits(['saveSearchHistory'])
	const handleClickCard = async() => {
		emits("saveSearchHistory")
	}
	const handleStart  = (id) => {
		userUpdateStarts(id)
	}
</script>

<style scoped lang="scss">
	@import "./css/ListCard.scss";
</style>