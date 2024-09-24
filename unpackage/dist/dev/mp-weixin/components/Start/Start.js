"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "Start",
  props: {
    heartType: {
      type: String,
      default: "heart"
    }
  },
  emits: ["clickStart"],
  setup(__props, { emit: __emit }) {
    const { info } = common_vendor.storeToRefs(store_user.useUserStore());
    const emits = __emit;
    const handleStart = async () => {
      if (!info.value)
        common_vendor.index.navigateTo({ url: "/pages/userinfo/login/login" });
      emits("clickStart");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "#0077FF",
          type: __props.heartType,
          size: "20"
        }),
        b: common_vendor.o(handleStart)
      };
    };
  }
};
wx.createComponent(_sfc_main);
