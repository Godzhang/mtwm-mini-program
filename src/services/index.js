import { get, post } from "../utils/request";
import URLS from "./urls";

export const getMerchantList = () => {
  return get(URLS.MERCHANT_LIST);
};

export const weChatLogin = (code) => {
  return post(URLS.WE_LOGIN, { code });
};
