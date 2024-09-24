<template>
	<!-- 基础卡片 -->
	<view class="list-card" v-if="item.mode === 'base'" @click="handleClickCard">
		<view class="list-card-header">
			<view class="list-card-title">
				{{item.title}}
			</view>
			<Start @clickStart="handleStart(item._id)" class="list-card-start"></Start>
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
				<uni-icons type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons type="eye" size="20" color="#0077FF"></uni-icons>
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
			<Start @clickStart="handleStart(item._id)" class="list-card-start"></Start>
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
				<uni-icons type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons type="eye" size="20" color="#0077FF"></uni-icons>
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
			<Start @clickStart="handleStart(item._id)" class="list-card-start"></Start>
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
				<uni-icons type="calendar" size="20" color="#0077FF"></uni-icons>
				<view class="publish-time">发布时间：{{item.create_time}}</view>
			</view>
			<view class="list-card-browse-count">
				<uni-icons type="eye" size="20" color="#0077FF"></uni-icons>
				<view class="borws-count"> {{item.browse_count}}浏览</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		item: Object
	})
	// console.log(currentUserStartArticleIds)
	const handleClickCard = async() => {
		console.log("handleClickCard")
	}
	const handleStart  = (id) => {
		console.log(id)
	}
</script>

<style scoped lang="scss">
	@import "./css/ListCard.scss";
</style>