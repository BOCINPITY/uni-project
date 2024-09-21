<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :activeIndex="activeIndex" :labelList="tabBar" @activeIndexchange="indexChange"></TabBar>
		<ArticleList :classify="classify" :activeIndex="activeIndex" @activeIndexchange="indexChange"
			:labelList="tabBar" class="list-container"></ArticleList>
	</view>
</template>

<script setup>
	import {onBeforeMount,reactive,ref} from 'vue';
	import { getLabelList } from '../../api/label';
	const tabBar = ref([])
	const activeIndex = ref(0)
	const classify = ref("全部")
	onBeforeMount(async () => {
		tabBar.value = await getLabelList()
	})
	const indexChange = (index) => {
		activeIndex.value = index
		const res = tabBar.value.find(item => index === +item.type)
		classify.value = res.description
	}
</script>

<style lang="scss" scoped>
	.home-container {
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flex-start, column);
		align-items: inherit;
	}

	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>