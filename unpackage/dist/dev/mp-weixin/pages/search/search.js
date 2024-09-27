"use strict";
const common_vendor = require("../../common/vendor.js");
const api_search = require("../../api/search.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_ArticleItem2 = common_vendor.resolveComponent("ArticleItem");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_NavBar2 + _easycom_ArticleItem2 + _easycom_uni_icons2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_ArticleItem = () => "../../components/ArticleItem/ArticleItem.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_NavBar + _easycom_ArticleItem + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchRes = common_vendor.ref([]);
    const isShowNoData = common_vendor.computed(() => searchRes.value.length);
    const parentValue = common_vendor.ref("");
    common_vendor.ref(true);
    const { searchHistoryList } = common_vendor.storeToRefs(store_user.useUserStore());
    const { updateUserSearchHistoryList, clearUserSearchHistoryList } = store_user.useUserStore();
    const childInputDone = async (value) => {
      if (value === "") {
        parentValue.value = "";
        searchRes.value = [];
        return;
      }
      parentValue.value = value;
      common_vendor.index.showToast({ icon: "loading" });
      const { data } = await api_search.getSearchData(value);
      common_vendor.index.hideToast();
      searchRes.value = data;
    };
    const saveSearchHistory = () => {
      console.log(parentValue.value);
      updateUserSearchHistoryList(parentValue.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(childInputDone),
        b: common_vendor.p({
          isSearch: true,
          parentValue: parentValue.value
        }),
        c: !isShowNoData.value
      }, !isShowNoData.value ? {
        d: common_vendor.o((...args) => common_vendor.unref(clearUserSearchHistoryList) && common_vendor.unref(clearUserSearchHistoryList)(...args)),
        e: common_vendor.f(common_vendor.unref(searchHistoryList), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => childInputDone(item), index)
          };
        })
      } : {}, {
        f: isShowNoData.value
      }, isShowNoData.value ? {
        g: common_vendor.o(saveSearchHistory),
        h: common_vendor.p({
          aticleList: searchRes.value
        })
      } : {
        i: common_vendor.p({
          type: "info",
          size: "50",
          color: "#ccc"
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
