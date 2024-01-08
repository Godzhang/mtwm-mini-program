import Taro from "@tarojs/taro";

export function showErrorToast(msg = "error") {
  Taro.showToast({
    title: msg,
    icon: "error",
    mask: true,
  });
}
