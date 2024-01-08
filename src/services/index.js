import { get } from "../utils/request";
import URLS from "./urls";

export const getMerchantList = () => {
  return get(URLS.MerchantList);
};
