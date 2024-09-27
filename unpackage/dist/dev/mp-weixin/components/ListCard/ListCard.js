"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
const store_user = require("../../store/user.js");
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
  emits: ["saveSearchHistory"],
  setup(__props, { emit: __emit }) {
    const { startsIds, userId } = common_vendor.storeToRefs(store_user.useUserStore());
    const isInUserStarts = (id) => {
      if (startsIds.value) {
        return startsIds.value.includes(id);
      }
    };
    const emits = __emit;
    const handleClickCard = async () => {
      emits("saveSearchHistory");
    };
    const handleStart = (id) => {
      api_user.userUpdateStarts(id);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.mode === "base"
      }, __props.item.mode === "base" ? {
        b: common_vendor.t(__props.item.title),
        c: common_vendor.o(($event) => handleStart(__props.item._id)),
        d: common_vendor.p({
          heartType: isInUserStarts(__props.item._id) ? "heart-filled" : "heart"
        }),
        e: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        f: common_vendor.t(__props.item.description),
        g: common_vendor.t(__props.item.tag),
        h: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        i: common_vendor.t(__props.item.create_time),
        j: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        k: common_vendor.t(__props.item.browse_count),
        l: common_vendor.o(handleClickCard)
      } : {}, {
        m: __props.item.mode === "mutiple"
      }, __props.item.mode === "mutiple" ? {
        n: common_vendor.t(__props.item.title),
        o: common_vendor.o(($event) => handleStart(__props.item._id)),
        p: common_vendor.p({
          heartType: isInUserStarts(__props.item._id) ? "heart-filled" : "heart"
        }),
        q: common_vendor.f(__props.item.cover, (it, index, i0) => {
          return {
            a: it,
            b: index
          };
        }),
        r: common_vendor.t(__props.item.description),
        s: common_vendor.t(__props.item.tag),
        t: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        v: common_vendor.t(__props.item.create_time),
        w: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        x: common_vendor.t(__props.item.browse_count),
        y: common_vendor.o(handleClickCard)
      } : {}, {
        z: __props.item.mode === "cover"
      }, __props.item.mode === "cover" ? {
        A: common_vendor.t(__props.item.title),
        B: common_vendor.o(($event) => handleStart(__props.item._id)),
        C: common_vendor.p({
          heartType: isInUserStarts(__props.item._id) ? "heart-filled" : "heart"
        }),
        D: __props.item.cover[0] ? __props.item.cover[0] : "/static/logo.png",
        E: common_vendor.t(__props.item.description),
        F: common_vendor.t(__props.item.tag),
        G: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "#0077FF"
        }),
        H: common_vendor.t(__props.item.create_time),
        I: common_vendor.p({
          type: "eye",
          size: "20",
          color: "#0077FF"
        }),
        J: common_vendor.t(__props.item.browse_count),
        K: common_vendor.o(handleClickCard)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37ca02cc"]]);
wx.createComponent(Component);
