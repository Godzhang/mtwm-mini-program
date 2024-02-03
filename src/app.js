import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "@/api";
import { observer, Provider } from "mobx-react";
import RootStoreProvider, { useRootStore } from "./store";

function App({ children }) {
  const { authStore } = useRootStore();

  useLaunch(() => {
    authStore.checkLogin();
  });

  // children 是将要会渲染的页面
  return <RootStoreProvider>{children}</RootStoreProvider>;
}

export default App;
