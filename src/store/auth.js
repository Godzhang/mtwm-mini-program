import Taro from "@tarojs/taro";
import { makeAutoObservable } from "mobx";
import { TOKEN_KEY } from "../global";
import { showErrorToast } from "../utils/utils";

class AuthStore {
  token = "";
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get isLogin() {
    return typeof this.token === "string" && this.token.length > 0;
  }

  login() {
    return new Promise((resolve, reject) => {
      Taro.login({
        async success(res) {
          if (res.code) {
            const token = await weChatLogin(res.code);
            Taro.setStorageSync(TOKEN_KEY, token);
            this.setToken(token);
            resolve();
          } else {
            showErrorToast("登录失败" + res.errMsg);
            reject({ message: "登录失败" });
          }
        },
        fail(reason) {
          reject(reason);
        },
      });
    });
  }

  logout() {
    this.setToken(null);
    return Promise.resolve();
  }

  setToken(t) {
    this.token = t;
    if (t == null) {
      Taro.removeStorageSync(TOKEN_KEY);
    } else {
      Taro.setStorageSync(TOKEN_KEY, t);
    }
  }
}

export default AuthStore;
