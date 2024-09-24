import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	unistorage:true,
	state: () => ({
		info:null
	}),
	actions:{
		updateUserInfo(info){
			this.info = info
		}
	}
});
