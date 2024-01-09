import { View, Text, ScrollView, StickyHeader } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./order.scss";
import { useRef, useState } from "react";

export default function Order() {
  const [isSticky, setIsSticky] = useState(false);

  useLoad(() => {
    const query = Taro.createSelectorQuery();
    query.select(".banner").boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(([banner, viewport]) => {
      console.log(banner, viewport);
    });
  });

  const onScroll = (e) => {
    const query = Taro.createSelectorQuery();
    query.select(".banner-box").boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(([banner, viewport]) => {
      if (banner.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  };

  return (
    <ScrollView
      scrollY
      className="order-page"
      style={{ height: "100vh" }}
      onScroll={onScroll}
    >
      <View style={{ height: "300px", backgroundColor: "orange" }}></View>
      <View className="banner-box">
        <View className={["banner", isSticky ? "sticky" : ""].join(" ")}>
          {/* <AtTag className="tag">123</AtTag> */}
        </View>
      </View>
      <View style={{ height: "3000px", backgroundColor: "#08c" }}></View>
    </ScrollView>
  );
}
