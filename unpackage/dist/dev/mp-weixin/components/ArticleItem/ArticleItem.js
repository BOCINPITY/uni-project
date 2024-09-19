"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ListCard2 = common_vendor.resolveComponent("ListCard");
  _easycom_ListCard2();
}
const _easycom_ListCard = () => "../ListCard/ListCard.js";
if (!Math) {
  _easycom_ListCard();
}
const _sfc_main = {
  __name: "ArticleItem",
  setup(__props) {
    const itemList = common_vendor.ref([
      {
        name: "xxx",
        mode: "base",
        views: 13213,
        tag: "日漫",
        meta: {
          title: "火影忍者",
          description: "《火影忍者》十多年前一只拥有巨大威力的妖兽“九尾妖狐”袭击了木叶忍者村，当时的第四代火影拼尽全力，以自己的生命为代价将“九尾妖狐”封印在了刚出生的鸣人身上。"
        },
        url: ["https://cdn.picui.cn/vip/2024/09/19/66ec21fe14f6e.jpg"]
      },
      {
        name: "ddd",
        mode: "base",
        views: 13213,
        tag: "东京食尸鬼",
        meta: {
          title: "東京喰種",
          description: "《東京喰種》是石田翠的出道作，是將刊載於《Miracle Jump》No.2的原單篇作品重新架構與創作的作品。以現代日本東京為舞台，並以人類姿態的吃人怪人「喰種」為主題的黑暗奇幻漫畫作品。 原著書名中的「喰種」，意為人型食屍鬼。"
        },
        url: ["https://cdn.picui.cn/vip/2024/09/19/66ec220ca4a95.jpg"]
      },
      {
        name: "qqq",
        mode: "base",
        views: 1112,
        tag: "游戏",
        meta: {
          title: "Minecraft",
          description: "Minecraft（《我的世界》）是由Mojang Studios开发的一款3D沙盒电子游戏。玩家可在游戏中无拘无束地在3个维度内与由方块和实体构成的世界互动。多种玩法可供玩家选择，带来无限可能。"
        },
        url: ["https://cdn.picui.cn/vip/2024/09/19/66ec220ca28b8.jpg"]
      },
      {
        name: "www",
        mode: "cover",
        views: 1212,
        meta: {
          title: "cover测试",
          description: "这是一段描述文字"
        },
        url: [
          "https://cdn.picui.cn/vip/2024/09/19/66ec21fe14f6e.jpg",
          "https://cdn.picui.cn/vip/2024/09/19/66ec220ca28b8.jpg",
          "https://cdn.picui.cn/vip/2024/09/19/66ec220ca4a95.jpg"
        ]
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemList.value, (item, index, i0) => {
          return {
            a: index,
            b: "46d4f33b-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46d4f33b"]]);
wx.createComponent(Component);
