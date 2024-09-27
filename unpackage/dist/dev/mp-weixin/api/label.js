"use strict";
const common_vendor = require("../common/vendor.js");
async function getLabelList() {
  const { result } = await common_vendor.Ys.callFunction({ name: "label_get_list" });
  if (result.code === 200) {
    return result.data;
  } else {
    common_vendor.index.showToast({
      icon: "error",
      title: result.msg
    });
    return new Error(result.msg);
  }
}
exports.getLabelList = getLabelList;
