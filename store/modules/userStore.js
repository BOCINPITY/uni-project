export default {
	namespaced: true,
	state: {
		info:{}
	},
	getters: {

	},
	mutations: {
		updateUserInfo(state,payload){
			state.info = payload
		}
	},
	actions: {

	}
}