"use strict";
const common_vendor = require("../../common/vendor.js");
const api_label = require("../../api/label.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  const _easycom_ArticleList2 = common_vendor.resolveComponent("ArticleList");
  (_easycom_NavBar2 + _easycom_TabBar2 + _easycom_ArticleList2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
const _easycom_ArticleList = () => "../../components/ArticleList/ArticleList.js";
if (!Math) {
  (_easycom_NavBar + _easycom_TabBar + _easycom_ArticleList)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabBar = common_vendor.ref([]);
    const activeIndex = common_vendor.ref(0);
    const classify = common_vendor.ref("全部");
    common_vendor.onBeforeMount(async () => {
      tabBar.value = await api_label.getLabelList();
    });
    const indexChange = (index) => {
      activeIndex.value = index;
      const res = tabBar.value.find((item) => index === +item.type);
      classify.value = res.description;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(indexChange),
        b: common_vendor.p({
          activeIndex: activeIndex.value,
          labelList: tabBar.value
        }),
        c: common_vendor.o(indexChange),
        d: common_vendor.p({
          classify: classify.value,
          activeIndex: activeIndex.value,
          labelList: tabBar.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
