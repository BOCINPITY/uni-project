"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_PageHeader2 = common_vendor.resolveComponent("PageHeader");
  _easycom_PageHeader2();
}
const _easycom_PageHeader = () => "../../components/PageHeader/PageHeader.js";
if (!Math) {
  _easycom_PageHeader();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      info: "搜索"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
