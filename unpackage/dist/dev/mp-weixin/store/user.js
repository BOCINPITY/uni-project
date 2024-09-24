"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  unistorage: true,
  state: () => ({
    info: null
  }),
  actions: {
    updateUserInfo(info) {
      this.info = info;
    }
  }
});
exports.useUserStore = useUserStore;
