import { useUserStore } from "../store/user"

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

export async function userGetCode(phone){
	uni.showToast({icon:"none"})
	const {result} = await uniCloud.callFunction({
		name:"user_get_code",
		data:phone
	})
}
// 更新用户收藏的文章列表
export async function userUpdateStarts(id){
	const {userId,updateUserInfo} = useUserStore()
	uni.showToast({
		icon:"loading"
	})
	const { result } = await uniCloud.callFunction({
		name:"user_update_starts",
		data:{
			articleId:id,
			userId:userId
		}
	})
	if(result.code === 200){
		updateUserInfo(result.data.newUserInfo)
		uni.showToast({
			icon:"success",
			title:result.data.msg
		})
	}else{
		uni.showToast({
			icon:"error",
			title:"操作失败"
		})
	}


}