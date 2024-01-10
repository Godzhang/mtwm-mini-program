const requirePath = (name) => require(`/src/assets/nav-menu-icon/${name}`);

export const mainMenu = [
  {
    // iconUrl: "/src/assets/nav-menu-icon/meishi.png",
    iconUrl: requirePath("meishi.png"),
    label: "美食",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requirePath("tiandian.png"),
    label: "甜点饮品",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requirePath("chaoshi.png"),
    label: "超市便利",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requirePath("guoshu.png"),
    label: "蔬菜水果",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requirePath("maiyao.png"),
    label: "看病买药",
    router: "",
    isMain: true,
  },
];

export const subMenu = [
  {
    iconUrl: requirePath("2-1.png"),
    label: "夜宵",
    router: "",
  },
  {
    iconUrl: requirePath("2-4.png"),
    label: "拼好饭",
    router: "",
  },
  {
    iconUrl: requirePath("2-3.png"),
    label: "跑腿",
    router: "",
  },
  {
    iconUrl: requirePath("2-5.png"),
    label: "津贴联盟",
    router: "",
  },
  {
    iconUrl: requirePath("2-4.png"),
    label: "浪漫鲜花",
    router: "",
  },
  {
    iconUrl: requirePath("3-1.png"),
    label: "汉堡披萨",
    router: "",
  },
  {
    iconUrl: requirePath("2-1.png"),
    label: "品质百货",
    router: "",
  },
  {
    iconUrl: requirePath("2-2.png"),
    label: "龙虾烧烤",
    router: "",
  },
  {
    iconUrl: requirePath("2-3.png"),
    label: "鸭脖卤味",
    router: "",
  },
  {
    iconUrl: requirePath("3-3.png"),
    label: "饺子馆",
    router: "",
  },
  {
    iconUrl: requirePath("3-5.png"),
    label: "新店特惠",
    router: "",
  },
  {
    iconUrl: requirePath("3-3.png"),
    label: "凉皮肉夹馍",
    router: "",
  },
  {
    iconUrl: requirePath("2-4.png"),
    label: "煲仔饭",
    router: "",
  },
  {
    iconUrl: requirePath("3-2.png"),
    label: "麻辣烫冒菜",
    router: "",
  },
  {
    iconUrl: requirePath("3-3.png"),
    label: "小吃馆",
    router: "",
  },
  {
    iconUrl: requirePath("3-2.png"),
    label: "黄焖鸡米饭",
    router: "",
  },
  {
    iconUrl: requirePath("3-4.png"),
    label: "日韩料理",
    router: "",
  },
  {
    iconUrl: requirePath("2-3.png"),
    label: "必点榜",
    router: "",
  },
  {
    iconUrl: requirePath("3-2.png"),
    label: "家常菜",
    router: "",
  },
  {
    iconUrl: requirePath("3-2.png"),
    label: "快食简餐",
    router: "",
  },
  // {
  //   iconUrl: requirePath(".png"),
  //   label: "全部",
  //   router: "/pages/allcategory/index",
  // },
];
