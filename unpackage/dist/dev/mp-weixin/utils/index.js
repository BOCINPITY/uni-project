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
exports.useTopFit = useTopFit;
