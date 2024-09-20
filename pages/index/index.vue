<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :activeIndex="activeIndex" :labelList="tabBar" @activeIndexchange="indexChange"></TabBar>
		<ArticleList :currentTab="currentTab" :activeIndex="activeIndex" @activeIndexchange="indexChange" :labelList="tabBar"
			class="list-container"></ArticleList>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		reactive,
		ref
	} from 'vue';
import { delay } from '../../utils';
	const tabBar = ref([])
	const activeIndex = ref(0)
	const currentTab = reactive({key:"0",value:"全部"})
	onBeforeMount(async () => {
		const {
			result
		} = await uniCloud.callFunction({
			name: "label_get_list"
		})
		tabBar.value = result.res
	})
	const indexChange = (index) => {
		activeIndex.value = index
		const res = tabBar.value.find(item => index === +item.type)
		currentTab.key = res.type
		currentTab.value = res.description
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