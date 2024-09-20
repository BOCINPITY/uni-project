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
    labelList: Array,
    currentTab: Object
  },
  emits: ["activeIndexchange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const aticleList = common_vendor.ref([]);
    const _showAticleList = common_vendor.ref([]);
    const emit = __emit;
    const swiperChange = async ({
      detail
    }) => {
      emit("activeIndexchange", detail.current);
    };
    common_vendor.watch(() => props.currentTab.value, (newValue, oldValue) => {
      _showAticleList.value = [];
      aticleList.value.forEach((item) => {
        if (item.classify === newValue) {
          _showAticleList.value.push(item);
        }
      });
    });
    common_vendor.onBeforeMount(async () => {
      common_vendor.index.showToast({
        icon: "loading"
      });
      const {
        result
      } = await common_vendor.Vs.callFunction({
        name: "article_get_list"
      });
      common_vendor.index.hideToast();
      aticleList.value = result.res;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.labelList, (item, k0, i0) => {
          return {
            a: "6335dad8-0-" + i0,
            b: item._id
          };
        }),
        b: common_vendor.p({
          aticleList: __props.currentTab.value === "全部" ? aticleList.value : _showAticleList.value
        }),
        c: common_vendor.o(swiperChange),
        d: __props.activeIndex
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6335dad8"]]);
wx.createComponent(Component);
