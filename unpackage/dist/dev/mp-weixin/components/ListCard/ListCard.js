"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_Start2 = common_vendor.resolveComponent("Start");
  (_easycom_uni_icons2 + _easycom_Start2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_Start = () => "../Start/Start.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_Start)();
}
const _sfc_main = {
  __name: "ListCard",
  props: {
    item: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.mode === "base"
      }, __props.item.mode === "base" ? {
        b: common_vendor.f(__props.item.url, (it, index, i0) => {
          return {
            a: it,
            b: index
          };
        }),
        c: common_vendor.t(__props.item.meta.title),
        d: common_vendor.t(__props.item.meta.description),
        e: common_vendor.t(__props.item.tag),
        f: common_vendor.p({
          type: "eye",
          size: "20"
        }),
        g: common_vendor.t(__props.item.views)
      } : {}, {
        h: __props.item.mode === "mutiple"
      }, __props.item.mode === "mutiple" ? {
        i: common_vendor.t(__props.item.meta.title),
        j: common_vendor.f(__props.item.url, (it, index, i0) => {
          return {
            a: it,
            b: index
          };
        }),
        k: common_vendor.t(__props.item.tag),
        l: common_vendor.p({
          type: "eye",
          size: "20"
        }),
        m: common_vendor.t(__props.item.views)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37ca02cc"]]);
wx.createComponent(Component);
