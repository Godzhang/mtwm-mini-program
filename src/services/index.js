import { get, post } from "../utils/request";
import URLS from "./urls";

export const getMerchantList = () => {
  return get(URLS.MERCHANT_LIST);
};

export const login = (code) => {
  return post(URLS.LOGIN, { code });
};
