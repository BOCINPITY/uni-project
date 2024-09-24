"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  unistorage: true,
  state: () => ({
    info: null
  }),
  getters: {
    startsIds: (state) => {
      var _a;
      return ((_a = state.info) == null ? void 0 : _a.article_starts_ids) || [];
    },
    userId: (state) => {
      var _a;
      return ((_a = state.info) == null ? void 0 : _a._id) || "";
    }
  },
  actions: {
    updateUserInfo(info) {
      this.info = info;
    },
    async isLogin() {
      return new Promise((resolve, reject) => {
        if (this.info) {
          resolve("已经登录");
        } else {
          common_vendor.index.navigateTo({
            url: "/pages/userinfo/login/login"
          });
        }
      });
    }
  }
});
exports.useUserStore = useUserStore;
