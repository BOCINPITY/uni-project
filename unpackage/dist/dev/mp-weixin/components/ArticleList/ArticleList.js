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
    const loadData = common_vendor.ref({});
    const aticleDataList = common_vendor.ref({});
    const loadStatus = common_vendor.ref("loding");
    const pageSize = common_vendor.ref(3);
    const emit = __emit;
    const swiperChange = async ({
      detail
    }) => {
      emit("activeIndexchange", detail.current);
    };
    common_vendor.watch(() => props.classify, async (value, oldValue) => {
      if (!loadData.value[props.activeIndex]) {
        loadData.value[props.activeIndex] = {
          page: 1,
          loading: "loading",
          total: 0
        };
      }
      if (!aticleDataList.value[props.activeIndex]) {
        common_vendor.index.showToast({
          icon: "loading"
        });
        const {
          list,
          total
        } = await api_article.getArticleList(props.classify, pageSize.value, loadData.value[props.activeIndex].page);
        aticleDataList.value[props.activeIndex] = list;
        loadData.value[props.activeIndex].total = total;
      }
      common_vendor.index.hideToast();
    });
    const loadMoreData = async () => {
      console.log(aticleDataList.value[props.activeIndex].length);
      if (aticleDataList.value[props.activeIndex].length === loadData.value[props.activeIndex].total) {
        loadData.value[props.activeIndex].loading = "no-more";
        return;
      }
      loadData.value[props.activeIndex].loading = "loading";
      const {
        list,
        total
      } = await api_article.getArticleList(props.classify, pageSize.value, ++loadData.value[props.activeIndex].page);
      aticleDataList.value[props.activeIndex].push(...list);
      loadData.value[props.activeIndex].loading = "more";
    };
    common_vendor.onBeforeMount(async () => {
      if (!loadData.value[props.activeIndex]) {
        loadData.value[props.activeIndex] = {
          page: 1,
          loading: "loading",
          total: 0
        };
      }
      const {
        list,
        total
      } = await api_article.getArticleList(props.classify, pageSize.value, loadData.value[props.activeIndex].page);
      aticleDataList.value[props.activeIndex] = list;
      loadData.value[props.activeIndex].total = total;
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
