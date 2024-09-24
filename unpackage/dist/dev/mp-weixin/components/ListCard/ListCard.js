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
    const handleStart = (id) => {
      console.log(id);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.mode === "base"
      }, __props.item.mode === "base" ? {
        b: common_vendor.t(__props.item.title),
        c: common_vendor.o(($event) => handleStart(__props.item._id)),
        d: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        e: common_vendor.t(__props.item.description),
        f: common_vendor.t(__props.item.tag),
        g: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        h: common_vendor.t(__props.item.create_time),
        i: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        j: common_vendor.t(__props.item.browse_count),
        k: common_vendor.o(handleClickCard)
      } : {}, {
        l: __props.item.mode === "mutiple"
      }, __props.item.mode === "mutiple" ? {
        m: common_vendor.t(__props.item.title),
        n: common_vendor.o(($event) => handleStart(__props.item._id)),
        o: common_vendor.f(__props.item.cover, (it, index, i0) => {
          return {
            a: it,
            b: index
          };
        }),
        p: common_vendor.t(__props.item.description),
        q: common_vendor.t(__props.item.tag),
        r: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        s: common_vendor.t(__props.item.create_time),
        t: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        v: common_vendor.t(__props.item.browse_count),
        w: common_vendor.o(handleClickCard)
      } : {}, {
        x: __props.item.mode === "cover"
      }, __props.item.mode === "cover" ? {
        y: common_vendor.t(__props.item.title),
        z: common_vendor.o(($event) => handleStart(__props.item._id)),
        A: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        B: common_vendor.t(__props.item.description),
        C: common_vendor.t(__props.item.tag),
        D: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        E: common_vendor.t(__props.item.create_time),
        F: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        G: common_vendor.t(__props.item.browse_count),
        H: common_vendor.o(handleClickCard)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37ca02cc"]]);
wx.createComponent(Component);
