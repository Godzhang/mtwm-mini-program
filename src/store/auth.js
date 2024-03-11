import Taro from "@tarojs/taro";
import { makeAutoObservable } from "mobx";
import { TOKEN_KEY } from "../global";
import { weChatLogin } from "@/services";
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
    this.setToken("jjhodsaifhfjeuifhoi");
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     try {
    //       this.setToken("jjhodsaifhfjeuifhoi");
    //     } catch (e) {
    //       console.info(e);
    //     }
    //     resolve();
    //   }, 1500);
    //   // Taro.login({
    //   //   success: (res) => {
    //   //     if (res.code) {
    //   //       weChatLogin(res.code).then((token) => {
    //   //         this.setToken(token);
    //   //         resolve();
    //   //       });
    //   //     } else {
    //   //       showErrorToast("登录失败" + res.errMsg);
    //   //       reject({ message: "登录失败" });
    //   //     }
    //   //   },
    //   //   fail(reason) {
    //   //     reject(reason);
    //   //   },
    //   // });
    // });
  }

  logout() {
    this.setToken(null);
    return Promise.resolve();
  }

  setToken(t) {
    this.token = t;
    if (t === null) {
      Taro.removeStorageSync(TOKEN_KEY);
    } else {
      Taro.setStorageSync(TOKEN_KEY, t);
    }
  }

  checkLogin() {
    const token = Taro.getStorageSync(TOKEN_KEY);
    if (token) {
      this.token = token;
    }
  }
}

export default AuthStore;
