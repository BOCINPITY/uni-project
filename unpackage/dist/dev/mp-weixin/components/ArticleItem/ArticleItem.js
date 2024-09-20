"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ListCard2 = common_vendor.resolveComponent("ListCard");
  _easycom_ListCard2();
}
const _easycom_ListCard = () => "../ListCard/ListCard.js";
if (!Math) {
  _easycom_ListCard();
}
const _sfc_main = {
  __name: "ArticleItem",
  props: {
    aticleList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.aticleList, (item, index, i0) => {
          return {
            a: index,
            b: "46d4f33b-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46d4f33b"]]);
wx.createComponent(Component);
