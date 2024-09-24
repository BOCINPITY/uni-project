"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const verifyRules_login_index = require("../../../verifyRules/login/index.js");
const utils_index = require("../../../utils/index.js");
const api_user = require("../../../api/user.js");
const store_index = require("../../../store/index.js");
if (!Array) {
  const _easycom_PageHeader2 = common_vendor.resolveComponent("PageHeader");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_SendCode2 = common_vendor.resolveComponent("SendCode");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_PageHeader2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_SendCode2 + _easycom_uni_forms2)();
}
const _easycom_PageHeader = () => "../../../components/PageHeader/PageHeader.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_SendCode = () => "../../../components/SendCode/SendCode.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_PageHeader + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_SendCode + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const loginFormRef = common_vendor.ref();
    utils_index.useTopFit();
    const type = common_vendor.ref("account");
    const formData = common_vendor.ref({ account: "", password: "", phone: "", vcode: "" });
    const handleLogin = async () => {
      const res = await loginFormRef.value.validate();
      const resp = await api_user.login({ ...res, type: type.value });
      if (resp) {
        store_index.store.commit("userStore/updateUserInfo", resp);
        common_vendor.index.navigateBack();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          info: "用户登录"
        }),
        b: common_assets._imports_0,
        c: type.value === "account" ? 1 : "",
        d: common_vendor.o(($event) => type.value = "account"),
        e: type.value !== "account" ? 1 : "",
        f: common_vendor.o(($event) => type.value = "phone"),
        g: type.value === "account"
      }, type.value === "account" ? {
        h: common_vendor.o(($event) => formData.value.account = $event),
        i: common_vendor.p({
          placeholder: "请输入账号",
          trim: "all",
          modelValue: formData.value.account
        }),
        j: common_vendor.p({
          required: true,
          label: "账号",
          name: "account"
        }),
        k: common_vendor.o(($event) => formData.value.password = $event),
        l: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          trim: "all",
          modelValue: formData.value.password
        }),
        m: common_vendor.p({
          required: true,
          label: "密码",
          name: "password"
        })
      } : {
        o: common_vendor.o(($event) => formData.value.phone = $event),
        p: common_vendor.p({
          type: "number",
          placeholder: "请输入手机号",
          trim: "all",
          modelValue: formData.value.phone
        }),
        q: common_vendor.p({
          required: true,
          label: "手机号",
          name: "phone"
        }),
        r: common_vendor.o(($event) => formData.value.vcode = $event),
        s: common_vendor.p({
          type: "text",
          placeholder: "请输入验证码",
          trim: "all",
          modelValue: formData.value.vcode
        }),
        t: common_vendor.p({
          phoneForm: formData.value
        }),
        v: common_vendor.p({
          required: true,
          label: "验证码",
          name: "vcode"
        })
      }, {
        n: type.value === "phone",
        w: common_vendor.o(handleLogin),
        x: common_vendor.sr(loginFormRef, "47d7a160-1", {
          "k": "loginFormRef"
        }),
        y: common_vendor.p({
          modelValue: formData.value,
          rules: common_vendor.unref(verifyRules_login_index.rules),
          validateTrigger: "bind"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-47d7a160"]]);
wx.createPage(MiniProgramPage);
