"use strict";
const common_vendor = require("../common/vendor.js");
function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
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
exports.delay = delay;
exports.useTopFit = useTopFit;
