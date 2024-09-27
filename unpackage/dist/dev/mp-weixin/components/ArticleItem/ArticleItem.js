"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ListCard2 = common_vendor.resolveComponent("ListCard");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_ListCard2 + _easycom_uni_load_more2)();
}
const _easycom_ListCard = () => "../ListCard/ListCard.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_ListCard + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "ArticleItem",
  props: {
    aticleList: {
      type: Array,
      default: () => []
    },
    loadStatus: {
      type: String,
      default: "no-more"
    }
  },
  emits: ["loadMore", "saveSearchHistory"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const loadMore = () => {
      emits("loadMore");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.aticleList, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => _ctx.$emit("saveSearchHistory"), index),
            b: index,
            c: "46d4f33b-0-" + i0,
            d: common_vendor.p({
              item
            })
          };
        }),
        b: common_vendor.p({
          status: __props.loadStatus
        }),
        c: common_vendor.o(loadMore)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46d4f33b"]]);
wx.createComponent(Component);
