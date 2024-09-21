"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_SendCode2 = common_vendor.resolveComponent("SendCode");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_icons2 + _easycom_uni_forms_item2 + _easycom_SendCode2 + _easycom_uni_forms2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_SendCode = () => "../../../components/SendCode/SendCode.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_forms_item + _easycom_SendCode + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const { barHeight } = utils_index.useTopFit();
    const type = common_vendor.ref("account");
    const formData = common_vendor.ref(type.value === "account" ? { account: "", password: "" } : { phone: "", vcode: "" });
    const handleBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(barHeight) + "rpx",
        b: common_vendor.o(handleBack),
        c: common_vendor.p({
          type: "left",
          color: "#FFFFFF"
        }),
        d: common_assets._imports_0,
        e: type.value === "account" ? 1 : "",
        f: common_vendor.o(($event) => type.value = "account"),
        g: type.value !== "account" ? 1 : "",
        h: common_vendor.o(($event) => type.value = "phone"),
        i: type.value === "account"
      }, type.value === "account" ? {
        j: formData.value.account,
        k: common_vendor.o(($event) => formData.value.account = $event.detail.value),
        l: common_vendor.p({
          label: "账号",
          name: "account"
        }),
        m: formData.value.password,
        n: common_vendor.o(($event) => formData.value.password = $event.detail.value),
        o: common_vendor.p({
          label: "密码",
          name: "password"
        })
      } : {
        q: formData.value.phone,
        r: common_vendor.o(($event) => formData.value.phone = $event.detail.value),
        s: common_vendor.p({
          label: "手机号",
          name: "phone"
        }),
        t: formData.value.vcode,
        v: common_vendor.o(($event) => formData.value.vcode = $event.detail.value),
        w: common_vendor.p({
          label: "验证码",
          name: "vcode"
        })
      }, {
        p: type.value === "phone",
        x: common_vendor.p({
          modelValue: formData.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-47d7a160"]]);
wx.createPage(MiniProgramPage);
