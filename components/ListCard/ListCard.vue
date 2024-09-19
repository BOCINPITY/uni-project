<template>
	<!-- 基础卡片 -->
	<view class="list-card" v-if="item.mode === 'base'">

		<image class="list-card-image" :src="item.url[0]" mode="aspectFill"></image>
		<view class="list-card-content">
			<view class="list-card-title">
				{{item.meta.title}}
			</view>
			<view class="list-card-description">
				{{item.meta.description}}
			</view>
			<view class="list-card-tag">
				{{item.tag}}
			</view>
			<view class="list-card-views">
				<uni-icons type="eye" size="20"></uni-icons>
				浏览次数:{{item.views}}
			</view>
			<Start class="list-card-start"></Start>
		</view>

	</view>

</template>

<script setup>
	const props = defineProps({
		item: Object
	})
</script>

<style scoped lang="scss">
	@import "./css/ListCard.scss";
</style>