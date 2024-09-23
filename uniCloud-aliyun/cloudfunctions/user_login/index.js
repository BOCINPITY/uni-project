'use strict';
const { STATUS_CODES, USER } = require('../Message.js')

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {loginName,password,phone,type} = event
	const {affectedDocs,data} = await db.collection("user").aggregate().match(type === "account" ? {loginName,password} : {phone}).end()
	
	return affectedDocs ? {
		code: STATUS_CODES.SUCCESS,
		msg: data[0],
	} : {
		code: STATUS_CODES.FAIL,
		msg: type === "account" ?  USER.notFound : USER.phoneUnregistered,
	}
};
