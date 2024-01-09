import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "@/api";
import { View } from "@tarojs/components";

function App({ children }) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
