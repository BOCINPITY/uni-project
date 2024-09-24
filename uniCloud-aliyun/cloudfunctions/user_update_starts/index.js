'use strict';

const { STATUS_CODES } = require("../Message");

const db = uniCloud.database()

const dbCmd = db.command
exports.main = async (event, context) => {
	let msg = ''
	const {userId,articleId} = event
	const {data} = await db.collection('user').doc(userId).get();
	const articleIds = data[0].article_starts_ids
	const flag = articleIds.includes(articleId)
	let tempArr = null
	if(flag){
		tempArr = dbCmd.pull(articleId)
		msg = "取消收藏成功"
	}else{
		tempArr = dbCmd.addToSet(articleId)
		msg = "收藏成功"
	}
	await db.collection('user').doc(userId).update({article_starts_ids:tempArr});
	const res = await db.collection('user').doc(userId).get();
	//返回数据给客户端
	return {
		code:STATUS_CODES.SUCCESS,
		data:{
			msg:msg,
			newUserInfo:res.data[0]
		}
	}
};
