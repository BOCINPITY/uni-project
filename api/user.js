export async function login(userinfo = {}) {
	uni.showToast({icon: "loading",message: "登录中..."})
	const {result} = await uniCloud.callFunction({
		name: "user_login",
		data: {
			...userinfo
		}
	})
	if(result.code === 200){
		uni.showToast({icon:"success",title:"登录成功"})
	}else{
		uni.showToast({icon:"none",title: result.msg})
		return 0
	}
	return  result.msg
}