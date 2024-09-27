'use strict';
const db = uniCloud.database()
const ALL = "全部"
exports.main = async (event, context) => {
	const {pageSize = 10, current = 1, classify = ALL} = event
	const collection = db.collection('article')
	let matchObj = {classify: classify}
	if (classify === ALL) {
		matchObj = {}
	}
	console.log(matchObj,pageSize,current)
	const {data} = await collection.aggregate().match(matchObj).project({
		content: 0
	}).skip(pageSize * (current - 1)).limit(pageSize).end()
	const amount = await collection.where(matchObj).count()
	//返回数据给客户端
	return {
		code: 200,
		msg: "文章列表请求成功",
		res: {
			list: data,
			total: amount.total
		}
	}
};