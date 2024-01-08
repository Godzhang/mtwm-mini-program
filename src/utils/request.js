import Taro from "@tarojs/taro";
import { showErrorToast } from "./utils";

export const request = (url, data = {}, method = "GET", config = {}) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      data,
      method,
      header: {
        "Content-Type": "application/json",
        ...config,
      },
      success: function (res) {
        if (res.statusCode === 200) {
          const code = res.data?.code;
          // 0 表示正常返回数据
          if (code === 0) {
            resolve(res.data.content);
          } else {
            showErrorToast(res.data.message);
            reject(res.data.message);
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
