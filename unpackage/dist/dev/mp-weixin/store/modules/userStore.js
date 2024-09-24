"use strict";
const userStore = {
  namespaced: true,
  state: {
    info: {}
  },
  getters: {},
  mutations: {
    updateUserInfo(state, payload) {
      state.info = payload;
    }
  },
  actions: {}
};
exports.userStore = userStore;
