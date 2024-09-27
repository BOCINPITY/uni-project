<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :activeIndex="activeIndex" :labelList="tabBar" @activeIndexchange="indexChange"></TabBar>
		<ArticleList :classify="classify" :activeIndex="activeIndex" @activeIndexchange="indexChange"
			:labelList="tabBar" class="list-container"></ArticleList>
	</view>
</template>

<script setup>
	import {onBeforeMount,reactive,ref, toRaw} from 'vue';
	import { getLabelList } from '@/api/label';
	import { useUserStore } from '@/store/user';
	import {cloneDeep} from 'lodash'
	const {updateUserPreferenceSet,updateLabelList} = useUserStore()
	const {userPreferenceSet} = useUserStore()
	const tabBar = ref([])
	const activeIndex = ref(0)
	const classify = ref("全部")
	onBeforeMount(async () => {
		tabBar.value = await getLabelList()
		const tabBarBak = cloneDeep(tabBar.value)
		updateLabelList(tabBarBak)
		updateUserPreferenceSet(toRaw(tabBar.value))
	})
	const indexChange = (index) => {
		activeIndex.value = index
		const res = tabBar.value[index]
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