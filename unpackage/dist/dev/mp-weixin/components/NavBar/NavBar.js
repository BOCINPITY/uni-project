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
  props: {
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.ref("");
    console.log(props.isSearch);
    const { barHeight, marginRight } = utils_index.useTopFit();
    const handleSearch = () => {
      if (props.isSearch)
        return;
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const handleBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(barHeight) + "rpx",
        b: __props.isSearch
      }, __props.isSearch ? {
        c: common_vendor.p({
          type: "back",
          color: "#FFF",
          size: "24"
        }),
        d: common_vendor.o(handleBack)
      } : {}, {
        e: common_vendor.p({
          type: "search"
        }),
        f: !__props.isSearch
      }, !__props.isSearch ? {} : {}, {
        g: common_vendor.unref(marginRight) + "rpx",
        h: __props.isSearch ? "20rpx" : "",
        i: common_vendor.o(handleSearch),
        j: common_vendor.unref(barHeight) + 80 + "rpx"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9367190c"]]);
wx.createComponent(Component);
