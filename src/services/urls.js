const WxApiRoot = "http://39.107.159.90:8002";

const resolve = (url) => `${WxApiRoot}/${url}`;

const URLS = {
  // auth
  WE_LOGIN: resolve("auth/login"),
  // data
  MERCHANT_LIST: resolve("merchant/list"),
};

export default URLS;
