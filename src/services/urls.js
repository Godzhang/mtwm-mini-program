const WxApiRoot = "http://localhost:3030";

const resolve = (url) => `${WxApiRoot}/${url}`;

const URLS = {
  MerchantList: resolve("merchant/list"),
};

export default URLS;
