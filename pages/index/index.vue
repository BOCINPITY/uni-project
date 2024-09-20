<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :activeIndex="activeIndex" :labelList="tabBar" @activeIndexchange="indexChange"></TabBar>
		<ArticleList :activeIndex="activeIndex" @activeIndexchange="indexChange" :labelList="tabBar"
			class="list-container"></ArticleList>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref
	} from 'vue';
	const tabBar = ref([])
	const activeIndex = ref(0)
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