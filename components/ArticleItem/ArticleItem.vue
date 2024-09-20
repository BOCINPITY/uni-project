<template>
	<view class="article-list-container">
		<scroll-view scroll-y="true" class="article-list-scroll">
			<view class="article-list-content">
				<ListCard :item="item" v-for="(item,index) in aticleList" :key="index"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref
	} from 'vue';
	const props = defineProps({
		aticleList:{
			type:Array,
			default:() => []
		}
	})
</script>

<style lang="scss" scoped>
	.article-list-container {
		height: 100%;

		.article-list-scroll {
			height: 100%;
			overflow: hidden;
			box-sizing: border-box;
		}
	}
</style>