import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "@/api";
import { observer, Provider } from "mobx-react";
import RootStoreProvider from "./store";

function App({ children }) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return <RootStoreProvider>{children}</RootStoreProvider>;
}

export default App;
