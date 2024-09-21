"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "NavBar",
  setup(__props) {
    const { barHeight, marginRight } = utils_index.useTopFit();
    const handleSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(barHeight) + "rpx",
        b: common_vendor.p({
          type: "search"
        }),
        c: common_vendor.unref(marginRight) + "rpx",
        d: common_vendor.o(handleSearch),
        e: common_vendor.unref(barHeight) + 80 + "rpx"
      };
    };
  }
};
wx.createComponent(_sfc_main);
