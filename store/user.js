import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	unistorage:true,
	state: () => ({
		info:null
	}),
	getters:{
		startsIds:(state) => (state.info?.article_starts_ids || []),
		userId:(state) => (state.info?._id || '')
	},
	actions:{
		updateUserInfo(info){
			this.info = info
		},
		async isLogin(){
			return new Promise((resolve,reject) => {
				if(this.info){
					resolve("已经登录")
				}else{
					uni.navigateTo({
						url:"/pages/userinfo/login/login"
					})
				}
			})
		}
	}
});
