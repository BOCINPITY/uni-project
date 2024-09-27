<template>
	<view class="article-list-container">
		<scroll-view scroll-y="true" class="article-list-scroll" @scrolltolower="loadMore">
			<view class="article-list-content">
				<ListCard @saveSearchHistory="$emit('saveSearchHistory')" :item="item" v-for="(item,index) in aticleList" :key="index"></ListCard>
				<uni-load-more :status="loadStatus"></uni-load-more>
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
		},
		loadStatus:{
			type:String,
			default:"no-more"
		}
	})
	const emits = defineEmits(["loadMore","saveSearchHistory"])
	const loadMore = () => {
		emits("loadMore")
	}
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