<template>
	<!-- <PageHeader info="搜索"></PageHeader> -->
	<view class="search-container">
		<NavBar :isSearch="true" :parentValue="parentValue" @childInputDone="childInputDone"></NavBar>
		<!-- 搜索容器 -->
		<view class="search-wapper">
			<!-- 没有进行搜索操作 -->
			<view v-if="parentValue === ''" class="search-history-container">
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="clear-history">清空</text>
				</view>
			</view>
		</view>
		<view class="search-list-container">
			<view v-if="isShowNoData" class="search-content">
				<ArticleItem :aticleList="searchRes"></ArticleItem>
			</view>
			<view v-else class="no-data">
				<uni-icons type="info" size="50" color="#ccc"></uni-icons>
				<view class="info">无数据</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	import {computed, ref} from 'vue';
	import { getSearchData } from '@/api/search';
	const searchRes = ref([])
	const isShowNoData = computed(() => searchRes.value.length)
	const parentValue = ref("")
	const childInputDone = async(value) => {
		parentValue.value = value
		uni.showToast({icon:"loading"})
		const {data} = await getSearchData(value)
		uni.hideToast()
		searchRes.value = data
	}
</script>

<style lang="scss">
	@import './css/search.scss'
</style>