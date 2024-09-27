<template>
	<view class="search-container">
		<NavBar :isSearch="true" :parentValue="parentValue" @childInputDone="childInputDone"></NavBar>
		<!-- 搜索容器 -->
		<!-- 没有进行搜索操作 -->
		<view v-if="!isShowNoData" class="search-history-container">
			<view class="search-header">
				<text class="history-text">搜索历史</text>
				<text class="clear-history" @click="clearUserSearchHistoryList">清空</text>
			</view>
			<view class="search-history-content">
				<view class="history-tag-item" v-for="(item,index) in searchHistoryList" :key="index" @click="childInputDone(item)">
					{{item}}
				</view>
			</view>
		</view>

		<view class="search-list-container">
			<view v-if="isShowNoData" class="search-content">
				<ArticleItem @saveSearchHistory="saveSearchHistory" :aticleList="searchRes"></ArticleItem>
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
	import { useUserStore } from '@/store/user';
	import {storeToRefs} from 'pinia'
	const searchRes = ref([])
	const isShowNoData = computed(() => searchRes.value.length)
	const parentValue = ref("")
	const isShowHistory = ref(true)
	const {searchHistoryList} = storeToRefs(useUserStore())
	const {updateUserSearchHistoryList,clearUserSearchHistoryList} = useUserStore()
	const childInputDone = async(value) => {
		if(value === "") {
			parentValue.value = ""
			searchRes.value = []
			return
		}
		parentValue.value = value
		uni.showToast({icon:"loading"})
		const {data} = await getSearchData(value)
		uni.hideToast()
		searchRes.value = data
	}
	const saveSearchHistory = () => {
		updateUserSearchHistoryList(parentValue.value)
	}
</script>

<style lang="scss">
	@import './css/search.scss'
</style>