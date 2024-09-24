// 页面路径：store/index.js
import {createStore} from 'vuex'
import userStore from './modules/userStore'
import articleStore from './modules/articleStore'


export default createStore({
	modules: {
		userStore,
		articleStore
	}
})
