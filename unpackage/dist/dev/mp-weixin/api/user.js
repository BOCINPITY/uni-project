"use strict";
const common_vendor = require("../common/vendor.js");
async function login(userinfo = {}) {
  common_vendor.index.showToast({ icon: "loading", message: "登录中..." });
  const { result } = await common_vendor.Vs.callFunction({
    name: "user_login",
    data: {
      ...userinfo
    }
  });
  if (result.code === 200) {
    common_vendor.index.showToast({ icon: "success", title: "登录成功" });
  } else {
    common_vendor.index.showToast({ icon: "none", title: result.msg });
    return 0;
  }
  return result.msg;
}
exports.login = login;
