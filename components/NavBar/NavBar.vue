<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:barHeight + 'rpx'}"></view>
			<!-- 当组件作为搜索界面使用的时候 -->
			<view v-if="isSearch" class="return-icon" @click="handleBack">
				<uni-icons type="back" color="#FFF" size="24"></uni-icons>
			</view>

			<view class="nav-bar-content" :style="{marginRight:marginRight + 'rpx',marginLeft: isSearch ? '20rpx' : ''}" @click="handleSearch">
				<uni-icons type="search" ></uni-icons>
				<view v-if="!isSearch" class="nav-bar-search-text">
					输入文章标题进行搜索
				</view>
				<input v-else v-model.trim="searchData" @input="textInput" @confirm="inputDone" confirm-type="search" class="search-input" type="text" placeholder="输入文章标题进行搜索" />
				</view>
		</view>
		<view :style="{height:barHeight + 80 + 'rpx'}">
			<!--  -->
		</view>
	</view>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { debounce, useTopFit } from '@/utils';
	const props = defineProps({
		isSearch:{
			type:Boolean,
			default:false
		},
		parentValue:{
			type:String,
			default:""
		}
	})
	const emits = defineEmits(['childInputDone'])
	const searchData = computed({
		get: () => props.parentValue,
		set:() => props.parentValue,
	})
	// 由于props是只读的，所以不能绑定到input上，所以数据双向绑定的时候得这样处理
	const inputDone = () =>{
		emits("childInputDone",searchData.value)
	}
	const {barHeight,marginRight} = useTopFit()
	const handleSearch = () => {
		if(props.isSearch) return
		uni.navigateTo({
			url:"/pages/search/search",
		})
	}
	
	const textInput = debounce(({detail}) => {
		if(detail.value === "") emits("childInputDone","")
		emits("childInputDone",detail.value)
	},1000)
	const handleBack = () => {
		// #ifdef H5
			uni.switchTab({
				url:"/pages/index/index"
			})
		// #endif
		// #ifndef H5
			uni.navigateBack()
		// #endif

	}
</script>

<style lang="scss" scoped>
	@import "./css/NavBar.scss";
</style>