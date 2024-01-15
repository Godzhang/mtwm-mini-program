export default defineAppConfig({
  entryPagePath: "pages/mine/mine",
  pages: [
    "pages/index/index",
    "pages/order/order",
    "pages/mine/mine",
    "pages/search/search",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fae653",
    navigationBarTitleText: "首页",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#666",
    selectedColor: "#333",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabbar-icon/home.png",
        selectedIconPath: "./assets/tabbar-icon/home-active.png",
      },
      {
        pagePath: "pages/order/order",
        text: "订单",
        iconPath: "./assets/tabbar-icon/order.png",
        selectedIconPath: "./assets/tabbar-icon/order-active.png",
      },
      {
        pagePath: "pages/mine/mine",
        text: "我的",
        iconPath: "./assets/tabbar-icon/my.png",
        selectedIconPath: "./assets/tabbar-icon/my-active.png",
      },
    ],
  },
});
