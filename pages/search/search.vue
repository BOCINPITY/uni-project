<template>
	<!-- <PageHeader info="搜索"></PageHeader> -->
	<view class="search-container">
		<NavBar :isSearch="true"></NavBar>
		<!-- 搜索容器 -->
		<view class="search-wapper">
			<!-- 没有进行搜索操作 -->
			<view v-if="true" class="search-history-container">
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="clear-history">清空</text>
				</view>
				<view v-if="true" class="search-content">
					<view class="history-item" v-for="(item,index) in 10" :key="index">
						直播
					</view>
				</view>
				<view v-else class="no-data">
					<uni-icons type="info" size="50" color="#ccc"></uni-icons>
					<view class="info">无数据</view>
				</view>
			</view>
			<!-- 开始进行搜索操作 -->
			<view v-else class=""></view>
		</view>
	</view>

</template>

<script setup>

</script>

<style lang="scss">
	@import './css/search.scss'
</style>