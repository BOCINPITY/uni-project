"use strict";
const common_vendor = require("../common/vendor.js");
const store_modules_userStore = require("./modules/userStore.js");
const store_modules_articleStore = require("./modules/articleStore.js");
const store = common_vendor.createStore({
  modules: {
    userStore: store_modules_userStore.userStore,
    articleStore: store_modules_articleStore.articleStore
  }
});
exports.store = store;
