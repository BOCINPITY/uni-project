import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	unistorage:true,
	state: () => ({
		info:null,
		searchHistoryList:[]
	}),
	getters:{
		startsIds:(state) => (state.info?.article_starts_ids || []),
		userId:(state) => (state.info?._id || '')
	},
	actions:{
		updateUserInfo(info){
			this.info = info
		},
		updateUserSearchHistoryList(value){
			if(this.searchHistoryList.includes(value)) return
			this.searchHistoryList.unshift(value)
		},
		clearUserSearchHistoryList(){
			this.searchHistoryList = []
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
