"use strict";
const utils_index = require("../../utils/index.js");
const articleStore = {
  namespaced: true,
  state: {
    articleTitle: "测试标题"
  },
  getters: {},
  mutations: {
    changeArticleTile(state, payload) {
      state.articleTitle = "改变后的标题";
      payload ? state.articleTitle = payload : state.articleTitle = "payLoad没有值";
    }
  },
  actions: {
    asyncChangeActicleTitle({ commit }, payload) {
      utils_index.delay(2e3);
      commit("changeArticleTile", "异步改变标题");
    }
  }
};
exports.articleStore = articleStore;
