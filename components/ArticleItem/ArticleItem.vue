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
				description: "Minecraft（《我的世界》）是由Mojang Studios开发的一款3D沙盒电子游戏。玩家可在游戏中无拘无束地在3个维度内与由方块和实体构成的世界互动。多种玩法可供玩家选择，带来无限可能。",
			},
			url: ["https://cdn.picui.cn/vip/2024/09/19/66ec220ca28b8.jpg"]
		},
		{
			name: "www",
			mode: "mutiple",
			views: 1212,
			tag: "人生杂谈",
			meta: {
				title: "人生是旷野",
				description: "人生是旷野，而非轨道。在这片广袤的旷野之上，没有既定的路线，没有唯一的方向。你可以自由地奔跑、漫步、探索，去追寻心中那一抹独特的风景。这里，有连绵起伏的山峦等待你去攀登，挑战自我的高度；有奔腾不息的河流呼唤你去跨越，感受生命的力量；有静谧幽深的森林诱使你去深入，发现未知的奥秘。每一处角落都可能隐藏着惊喜，每一个选择都可能开启一段全新的旅程。"
			},
			url: ["https://cdn.picui.cn/vip/2024/09/20/66ece1dee5898.jpg",
				"https://cdn.picui.cn/vip/2024/09/20/66ece20883aa0.jpg",
				"https://cdn.picui.cn/vip/2024/09/20/66ece1df338b3.jpg"
			]
		},
		{
			name: "qqq",
			mode: "cover",
			views: 1112,
			tag: "名胜古迹",
			meta: {
				title: "江汉关",
				description: "江汉关大楼（Hankow Customs House），位于湖北省武汉市汉口沿江大道与江汉路交会处，由英资思九生洋行设计，上海魏清记营造厂承建，民国十一年（1922年）动工，民国十三年（1924年）落成，占地面积1499平方米，建筑面积4009平方米，是中国现存最早的三座海关大楼之一。",
			},
			url: ["https://cdn.picui.cn/vip/2024/09/20/66ecf9393f6d8.jpg"]
		},
		{
			name: "www",
			mode: "mutiple",
			views: 1212,
			tag: "人生杂谈",
			meta: {
				title: "生日记录",
				description: "你不必随波逐流，不必按照他人的期待生活。你有权选择自己的道路，去追逐那属于自己的星辰大海。在这里，失败不是终点，而是新的起点；挫折不是阻碍，而是成长的契机。"
			},
			url: ["https://cdn.picui.cn/vip/2024/09/20/66ece20883aa0.jpg",
				"https://cdn.picui.cn/vip/2024/09/20/66ecf9c53a39b.png",
				"https://cdn.picui.cn/vip/2024/09/20/66ecf9ee93fcf.png"
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