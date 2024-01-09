import { View, Text, ScrollView, StickyHeader } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./order.scss";
import { useRef, useState } from "react";
import OrderLogin from "./components/login";

export default function Order() {
  useLoad(() => {});

  const onScroll = (e) => {};

  return (
    <OrderLogin />
    // <ScrollView
    //   scrollY
    //   className="order-page"
    //   style={{ height: "100vh" }}
    //   onScroll={onScroll}
    // ></ScrollView>
  );
}
