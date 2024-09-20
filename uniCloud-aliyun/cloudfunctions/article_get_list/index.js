'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const categoryValue = event.value
	const categoryKey = event.key
	const collection = db.collection('article')
	let res = null
	if (categoryValue && +categoryKey) {
		res = await collection.where({
			classify: categoryValue
		}).get()
	} else {
		res = await collection.aggregate().project({
			content: 0
		}).end()
	}


	//返回数据给客户端
	return {
		code: 200,
		msg: "success",
		res: res.data
	}
};