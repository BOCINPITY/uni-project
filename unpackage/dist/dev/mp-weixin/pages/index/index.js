"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  (_easycom_NavBar2 + _easycom_TabBar2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_TabBar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabBar = common_vendor.ref([]);
    common_vendor.onBeforeMount(async () => {
      const { result } = await common_vendor.Vs.callFunction({
        name: "label_get_list"
      });
      tabBar.value = result.res;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          labelList: tabBar.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
