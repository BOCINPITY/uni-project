"use strict";
const common_vendor = require("../../common/vendor.js");
const verifyRules_login_index = require("../../verifyRules/login/index.js");
require("../../api/user.js");
const MS_1 = 1e3;
const TIMEOUT = 120;
const _sfc_main = {
  __name: "SendCode",
  props: {
    phoneForm: Object
  },
  setup(__props) {
    const isTimeout = common_vendor.ref(true);
    const props = __props;
    let timer = null;
    const counter = common_vendor.ref(TIMEOUT);
    const getCode = async () => {
      const { phone, vcode } = props.phoneForm;
      if (!verifyRules_login_index.validatePhone(phone) || timer) {
        common_vendor.index.showToast({
          icon: "none",
          title: "请先填写手机号"
        });
        return;
      }
      isTimeout.value = false;
      runTime();
    };
    const runTime = () => {
      timer = setInterval(() => {
        if (counter.value === 1) {
          clearInterval(timer);
          timer = null;
          isTimeout.value = true;
          counter.value = TIMEOUT;
          return;
        }
        counter.value--;
      }, MS_1);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(isTimeout.value ? "获取验证码" : counter.value + "s"),
        b: common_vendor.o(getCode)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-969c3c07"]]);
wx.createComponent(Component);
