'use strict';

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {loginName,password,phone,type} = event
	const {affectedDocs,data} = await db.collection("user").aggregate().match(type === "account" ? {loginName,password} : {phone}).end()
	
	return affectedDocs ? {
		code: 200,
		msg: data[0],
	} : {
		code: 500,
		msg: type === "account" ?  "用户不存在" : "手机号未注册或绑定",
	}
};
