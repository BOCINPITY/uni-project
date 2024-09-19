<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" v-for="(item,index) in labelList" :key="index" :class="{active:activeIndex === index}" @click="handleTabItemClick(index)">
					{{item.description}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	const activeIndex = ref(0)
	const props = defineProps(["labelList"])
	const handleTabItemClick = (index) => {
		activeIndex.value = index
	}
</script>

<style lang="scss" scoped>
@import "./css/TabBar.scss";
</style>