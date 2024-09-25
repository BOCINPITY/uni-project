"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_NavBar2 + _easycom_uni_icons2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_NavBar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache) {
  return common_vendor.e({
    a: common_vendor.p({
      isSearch: true
    })
  }, {
    b: common_vendor.f(10, (item, index, i0) => {
      return {
        a: index
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
