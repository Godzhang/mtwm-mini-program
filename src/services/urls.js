const WxApiRoot = "http://39.107.159.90:8002";

const resolve = (url) => `${WxApiRoot}/${url}`;

const URLS = {
  MerchantList: resolve("merchant/list"),
};

export default URLS;
