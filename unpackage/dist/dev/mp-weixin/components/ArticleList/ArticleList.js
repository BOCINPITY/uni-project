"use strict";
const common_vendor = require("../../common/vendor.js");
const api_article = require("../../api/article.js");
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
    classify: String
  },
  emits: ["activeIndexchange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const aticleDataList = common_vendor.ref({});
    const pageSize = common_vendor.ref(6);
    const current = common_vendor.ref({});
    const totals = common_vendor.ref({});
    const loadStatus = common_vendor.ref("more");
    const emit = __emit;
    const swiperChange = async ({ detail }) => {
      emit("activeIndexchange", detail.current);
    };
    common_vendor.watch(() => props.classify, async (value, oldValue) => {
      if (!aticleDataList.value[props.activeIndex]) {
        loadStatus.value = "loading";
        const { list, total } = await api_article.getArticleList(props.classify, pageSize.value, 1);
        aticleDataList.value[props.activeIndex] = list;
        loadStatus.value = total <= pageSize.value ? "no-more" : "more";
        current.value[props.activeIndex] = 1;
        totals.value[props.activeIndex] = total;
      }
    });
    const loadMoreData = async () => {
      const len = aticleDataList.value[props.activeIndex].length;
      if (len === totals.value[props.activeIndex]) {
        loadStatus.value = "no-more";
        return;
      } else {
        loadStatus.value = "loading";
        const { list, total } = await api_article.getArticleList(props.classify, pageSize.value, ++current.value[props.activeIndex]);
        aticleDataList.value[props.activeIndex].push(...list);
        loadStatus.value = "more";
      }
    };
    common_vendor.onBeforeMount(async () => {
      loadStatus.value = "loading";
      const { list, total } = await api_article.getArticleList(props.classify, pageSize.value, 1);
      aticleDataList.value[props.activeIndex] = list;
      loadStatus.value = total <= pageSize.value ? "no-more" : "more";
      current.value[props.activeIndex] = 1;
      totals.value[props.activeIndex] = total;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.labelList, (item, index, i0) => {
          return {
            a: common_vendor.o(loadMoreData, item._id),
            b: "6335dad8-0-" + i0,
            c: item._id
          };
        }),
        b: common_vendor.p({
          loadStatus: loadStatus.value,
          aticleList: aticleDataList.value[__props.activeIndex]
        }),
        c: common_vendor.o(swiperChange),
        d: __props.activeIndex
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6335dad8"]]);
wx.createComponent(Component);
