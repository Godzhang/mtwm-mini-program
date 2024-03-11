import Taro, { useLoad } from "@tarojs/taro";
import "./order.scss";
import OrderLogin from "./components/login";
import { useState } from "react";

export default function Order() {
  const [isLogin, setIsLogin] = useState(false);

  const onScroll = (e) => {};

  return (
    <OrderLogin login={isLogin} loginChange={setIsLogin} />
    // <ScrollView
    //   scrollY
    //   className="order-page"
    //   style={{ height: "100vh" }}
    //   onScroll={onScroll}
    // ></ScrollView>
  );
}
