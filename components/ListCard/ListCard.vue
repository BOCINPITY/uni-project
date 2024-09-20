<template>
	<!-- 基础卡片 -->
	<view class="list-card" v-if="item.mode === 'base'">
		<image class="list-card-image" v-for="(it,index) in item.url" :src="it" :key="index" mode="aspectFill"></image>
		<view class="list-card-content">
			<view class="list-card-title">
				{{item.meta.title}}
			</view>
			<view class="list-card-description">
				{{item.meta.description}}
			</view>
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-views">
				<uni-icons type="eye" size="20"></uni-icons>
				{{item.views}}浏览
			</view>
		</view>

		<Start class="list-card-start"></Start>
	</view>
	<!-- 多图卡片 -->
	<view class="list-card mutiple" v-if="item.mode === 'mutiple'">
		<view class="list-card-title">
			{{item.meta.title}}
		</view>
		<view class="list-card-description">
			{{item.meta.description}}
		</view>
		<view class="images">
			<image class="list-card-image" v-for="(it,index) in item.url" :src="it" :key="index" mode="aspectFill">
			</image>
		</view>

		<view class="list-card-content">
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-views">
				<uni-icons type="eye" size="20"></uni-icons>
				{{item.views}}浏览
			</view>
		</view>
		<Start class="list-card-start"></Start>
	</view>
	<!-- 大图卡片 -->
	<!-- 多图卡片 -->
	<view class="list-card cover" v-if="item.mode === 'cover'">
		<view class="list-card-title">
			{{item.meta.title}}
		</view>
		<Start class="list-card-start"></Start>
		<view class="images">
			<image class="list-card-image" v-for="(it,index) in item.url" :src="it" :key="index" mode="aspectFill">
			</image>
		</view>

		<view class="list-card-content">
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-views">
				<uni-icons type="eye" size="20"></uni-icons>
				{{item.views}}浏览
			</view>
		</view>

	</view>
</template>

<script setup>
	const props = defineProps({
		item: Object
	})
</script>

<style scoped lang="scss">
	@import "./css/ListCard.scss";
</style>