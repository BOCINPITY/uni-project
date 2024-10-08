'use strict';

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {text} = event
	const collection = db.collection('article')
	const {data} = await collection.aggregate().match({title:new RegExp(text)}).project({
		content: 0
	}).end()
	//返回数据给客户端
	return {
		code:200,
		data:data
	}
}; 