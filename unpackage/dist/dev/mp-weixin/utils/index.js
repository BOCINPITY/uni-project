"use strict";
const common_vendor = require("../common/vendor.js");
function useTopFit() {
  const { statusBarHeight } = common_vendor.index.getSystemInfoSync();
  let barHeight = statusBarHeight * 2 || 20;
  let marginRight = 0;
  const menuinfo = common_vendor.index.getMenuButtonBoundingClientRect();
  barHeight = menuinfo.top * 2;
  marginRight = menuinfo.width * 2;
  return {
    barHeight,
    marginRight
  };
}
function debounce(func, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
exports.debounce = debounce;
exports.useTopFit = useTopFit;
