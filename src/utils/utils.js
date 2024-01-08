import Taro from "@tarojs/taro";

export function showErrorToast(msg = "error") {
  Taro.showToast({
    title: msg,
    icon: "error",
    mask: true,
  });
}
// 获取元素高度
export function getElHeight(selector) {
  return new Promise((resolve, reject) => {
    const query = Taro.createSelectorQuery();
    query.select(selector).boundingClientRect();
    query.exec((res) => {
      if (res && res[0]) {
        console.log(res[0]);
        resolve(res[0].height);
      } else {
        reject("get element height failed");
      }
    });
  });
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
