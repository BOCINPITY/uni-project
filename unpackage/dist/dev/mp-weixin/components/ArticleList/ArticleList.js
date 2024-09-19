"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ArticleItem2 = common_vendor.resolveComponent("ArticleItem");
  _easycom_ArticleItem2();
}
const _easycom_ArticleItem = () => "../ArticleItem/ArticleItem.js";
if (!Math) {
  _easycom_ArticleItem();
}
const _sfc_main = {
  __name: "ArticleList",
  props: {
    activeIndex: Number,
    labelList: Array
  },
  emits: ["activeIndexchange"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const swiperChange = ({ detail }) => {
      emit("activeIndexchange", detail.current);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.labelList, (item, k0, i0) => {
          return {
            a: "6335dad8-0-" + i0,
            b: item._id
          };
        }),
        b: common_vendor.o(swiperChange),
        c: __props.activeIndex
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6335dad8"]]);
wx.createComponent(Component);
