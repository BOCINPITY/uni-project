const STATUS_CODES = {
	SUCCESS: 200,
	FAIL: 500,
	NOT_FOUND: 404
}
const  USER  = {
	notFound: "用户不存在",
	passwordError: "密码错误",
	alreadyExist: "用户已存在",
	phoneUnregistered: "手机号未注册",
}
module.exports = {
	STATUS_CODES,
	USER
} 