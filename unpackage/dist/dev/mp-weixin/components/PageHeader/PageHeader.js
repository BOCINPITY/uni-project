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
  __name: "PageHeader",
  props: {
    info: String
  },
  setup(__props) {
    const { barHeight } = utils_index.useTopFit();
    const handleBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(barHeight) + "rpx",
        b: common_vendor.o(handleBack),
        c: common_vendor.p({
          type: "left",
          color: "#FFFFFF",
          size: "24"
        }),
        d: common_vendor.t(__props.info)
      };
    };
  }
};
wx.createComponent(_sfc_main);
