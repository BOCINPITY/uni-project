<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :labelList="tabBar"></TabBar>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref
	} from 'vue';
	const tabBar = ref([])
	onBeforeMount(async() => {
		const {result} =  await uniCloud.callFunction({
			name:"label_get_list"
		})
		tabBar.value = result.res
	})
</script>

<style lang="scss">
</style>