"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "TabBar",
  props: {
    activeIndex: Number,
    labelList: Array
  },
  emits: ["activeIndexchange"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleTabItemClick = (index) => {
      emit("activeIndexchange", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.labelList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.description),
            b: index,
            c: __props.activeIndex === index ? 1 : "",
            d: common_vendor.o(($event) => handleTabItemClick(index), index)
          };
        }),
        b: common_vendor.p({
          type: "gear",
          size: "26",
          color: "#666"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e632d448"]]);
wx.createComponent(Component);
