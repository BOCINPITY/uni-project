<template>
	<view class="label-admin-container">
		<PageHeader info="标签管理"></PageHeader>
		<view class="label-admin-my label-admin-block">
			<view class="block-header">
				<text>我的标签</text>
				<text class="edit-txt">编辑</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="(item,index) in 10">
					<Tag :isShowClose="true" @close=""></Tag>
				</view>
			</view>
		</view>
		<view class="label-admin-recoment label-admin-block">
			<view class="block-header">
				<text >推荐标签</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="(item,index) in 1">
					<Tag :isShowAdd="true" @close=""></Tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import 'css/labelAdmin.scss';
</style>
