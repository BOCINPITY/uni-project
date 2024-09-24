"use strict";
const common_vendor = require("../common/vendor.js");
const store_user = require("../store/user.js");
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
const { userId, updateUserInfo } = store_user.useUserStore();
async function userUpdateStarts(id) {
  common_vendor.index.showToast({
    icon: "loading"
  });
  const { result } = await common_vendor.Vs.callFunction({
    name: "user_update_starts",
    data: {
      articleId: id,
      userId
    }
  });
  if (result.code === 200) {
    updateUserInfo(result.data.newUserInfo);
    common_vendor.index.showToast({
      icon: "success",
      title: result.data.msg
    });
  } else {
    common_vendor.index.showToast({
      icon: "error",
      title: "操作失败"
    });
  }
}
exports.login = login;
exports.userUpdateStarts = userUpdateStarts;
