import Taro from "@tarojs/taro";
import { showErrorToast } from "./utils";

export const request = (url, data = {}, method = "GET", config = {}) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      data,
      method: method.toUpperCase(),
      header: {
        "Content-Type": "application/json",
        ...config,
      },
      success: function (res) {
        const { statusCode, data } = res;
        if (statusCode === 200) {
          // 0 表示正常返回数据
          if (data.code === 0) {
            resolve(data.content);
          } else {
            showErrorToast(data.message);
            reject(data.message);
          }
        }
      },
      fail: function (err) {
        reject(err.errMsg);
      },
    });
  });
};

export const get = (url, data, config) => {
  return request(url, data, config);
};

export const post = (url, data, config) => {
  return request(url, data, "POST", config);
};
