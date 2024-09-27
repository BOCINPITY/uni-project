<template>
	<view class="label-admin-container">
		<PageHeader info="标签管理"></PageHeader>
		<view class="label-admin-my label-admin-block">
			<view class="block-header">
				<text>我的标签</text>
				<text class="edit-txt" @click="() => isEdit = !isEdit">{{ isEdit ? '完成' : '编辑'}}</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="(item) in userPreferenceSet" :key="item._id">
					<Tag :isShowClose="isEdit" @close="handleClose" :labelItem="item"></Tag>
				</view>
			</view>
			<Empty :isShow="false"></Empty>
		</view>
		<view class="label-admin-recoment label-admin-block">
			<view class="block-header">
				<text >推荐标签</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="(item) in labelsDiff" :key="item._id">
					<Tag :isShowAdd="isEdit" :labelItem="item" @add="handleAdd"></Tag>
				</view>
			</view>
			<Empty :isShow="isShowRecoment"></Empty>
		</view>
	</view>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useUserStore } from '@/store/user';
	import {storeToRefs} from 'pinia'

	const {userPreferenceSet,labelList} = storeToRefs(useUserStore())
	const {popUserPreferenceSet,pushUserPreferenceSet} = useUserStore()
	// 两个集合做差集就是下面要展示的标签
	const labelsDiff = computed(() => labelList.value.filter(item => !userPreferenceSet.value.some(it => it._id === item._id)))
	const isEdit = ref(false)
	const isShowRecoment = computed(() => labelsDiff.value.length === 0)
	
	const handleClose = (id) => {
		popUserPreferenceSet(id)
	}
	const handleAdd = (id) => {
		pushUserPreferenceSet(id)
	}
</script>

<style lang="scss" scoped>
@import 'css/labelAdmin.scss';
</style>
