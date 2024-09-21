"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_Start2 = common_vendor.resolveComponent("Start");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_Start2 + _easycom_uni_icons2)();
}
const _easycom_Start = () => "../Start/Start.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_Start + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "ListCard",
  props: {
    item: Object
  },
  setup(__props) {
    const handleClickCard = async () => {
      console.log("handleClickCard");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.mode === "base"
      }, __props.item.mode === "base" ? {
        b: common_vendor.t(__props.item.title),
        c: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        d: common_vendor.t(__props.item.description),
        e: common_vendor.t(__props.item.tag),
        f: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        g: common_vendor.t(__props.item.create_time),
        h: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        i: common_vendor.t(__props.item.browse_count),
        j: common_vendor.o(handleClickCard)
      } : {}, {
        k: __props.item.mode === "mutiple"
      }, __props.item.mode === "mutiple" ? {
        l: common_vendor.t(__props.item.title),
        m: common_vendor.f(__props.item.cover, (it, index, i0) => {
          return {
            a: it,
            b: index
          };
        }),
        n: common_vendor.t(__props.item.description),
        o: common_vendor.t(__props.item.tag),
        p: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        q: common_vendor.t(__props.item.create_time),
        r: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        s: common_vendor.t(__props.item.browse_count),
        t: common_vendor.o(handleClickCard)
      } : {}, {
        v: __props.item.mode === "cover"
      }, __props.item.mode === "cover" ? {
        w: common_vendor.t(__props.item.title),
        x: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        y: common_vendor.t(__props.item.description),
        z: common_vendor.t(__props.item.tag),
        A: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        B: common_vendor.t(__props.item.create_time),
        C: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        D: common_vendor.t(__props.item.browse_count),
        E: common_vendor.o(handleClickCard)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37ca02cc"]]);
wx.createComponent(Component);
