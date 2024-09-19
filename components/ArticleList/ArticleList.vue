<!-- 文章列表组件 -->
<template>
	<swiper class="swiper-container" @change="swiperChange" :current="activeIndex">
		<swiper-item v-for="item in labelList" :key="item._id">
			<view class="swiper-item uni-bg-red">
				<ArticleItem ></ArticleItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script setup>
	const  props = defineProps({
		activeIndex:Number,
		labelList:Array
	})
	const emit = defineEmits(['activeIndexchange'])
	const swiperChange = ({detail}) => {
		emit('activeIndexchange',detail.current)
	}
</script>

<style lang="scss" scoped>
	.swiper-container{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
		}
	}

</style>