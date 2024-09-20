"use strict";
const common_vendor = require("../common/vendor.js");
async function getArticleList(classify = "全部", pageSize = 10, current = 1) {
  const { result } = await common_vendor.Vs.callFunction({
    name: "article_get_list",
    data: {
      pageSize,
      current,
      classify
    }
  });
  return {
    list: result.res.list,
    total: result.res.total
  };
}
exports.getArticleList = getArticleList;
