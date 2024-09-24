import { delay } from "../../utils"

export default {
	namespaced: true,
	state: {
		articleTitle:"测试标题"
	},
	getters: {
		
	},
	mutations: {
		changeArticleTile(state,payload){
			state.articleTitle = "改变后的标题"
			payload ? state.articleTitle = payload : state.articleTitle = "payLoad没有值"
		}
	},
	actions: {
		asyncChangeActicleTitle({commit},payload){
			delay(2000);
			commit("changeArticleTile","异步改变标题")
		}
	}
}
