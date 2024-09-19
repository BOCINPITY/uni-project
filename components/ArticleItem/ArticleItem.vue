<template>
	<view class="article-list-container">
		<scroll-view scroll-y="true" class="article-list-scroll">
			<view class="article-list-content">
				<ListCard :item="item" v-for="(item,index) in itemList" :key="index"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const itemList = ref([{
			name: "xxx",
			mode: "base",
			views: 13213,
			tag: "日漫",
			meta: {
				title: "火影忍者",
				description: "《火影忍者》十多年前一只拥有巨大威力的妖兽“九尾妖狐”袭击了木叶忍者村，当时的第四代火影拼尽全力，以自己的生命为代价将“九尾妖狐”封印在了刚出生的鸣人身上。"
			},
			url: ["https://cdn.picui.cn/vip/2024/09/19/66ec21fe14f6e.jpg"]
		},
		{
			name: "ddd",
			mode: "base",
			views: 13213,
			tag: "东京食尸鬼",
			meta: {
				title: "東京喰種",
				description: "《東京喰種》是石田翠的出道作，是將刊載於《Miracle Jump》No.2的原單篇作品重新架構與創作的作品。以現代日本東京為舞台，並以人類姿態的吃人怪人「喰種」為主題的黑暗奇幻漫畫作品。 原著書名中的「喰種」，意為人型食屍鬼。"
			},
			url: ["https://cdn.picui.cn/vip/2024/09/19/66ec220ca4a95.jpg"]
		},
		{
			name: "qqq",
			mode: "base",
			views: 1112,
			tag: "游戏",
			meta: {
				title: "Minecraft",
				description: "这是一段描述文字",
			},
			url: ["https://cdn.picui.cn/vip/2024/09/19/66ec220ca28b8.jpg"]
		},
		{
			name: "www",
			mode: "cover",
			views: 1212,
			meta: {
				title: "cover测试",
				description: "这是一段描述文字"
			},
			url: ["https://cdn.picui.cn/vip/2024/09/19/66ec21fe14f6e.jpg",
				"https://cdn.picui.cn/vip/2024/09/19/66ec220ca28b8.jpg",
				"https://cdn.picui.cn/vip/2024/09/19/66ec220ca4a95.jpg"
			]
		},

	])
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