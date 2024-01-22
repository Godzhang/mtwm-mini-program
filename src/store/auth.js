import Taro from "@tarojs/taro";
import { makeAutoObservable } from "mobx";
import { TOKEN_KEY } from "../global";

class AuthStore {
  token = "";
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get isLogin() {
    return typeof this.token === "string" && this.token.length > 0;
  }

  login() {
    this.token = "jfiosdifjewn";
    return Promise.resolve();
  }

  logout() {
    this.token = "";
    return Promise.resolve();
  }
}

export default AuthStore;
