import { Image, Swiper, SwiperItem, View, Text } from "@tarojs/components";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { mainMenu } from "./data";

//http://iph.href.lu/100x300?text=自定义文字

export default function NavMenu() {
  const swiperRef = useRef(null);
  const swiperItem1 = useRef(null);
  const swiperItem2 = useRef(null);
  const [swiperViewHeight, setSwiperViewHeight] = useState(0);

  useEffect(() => {
    changeSwiperHeight(0);
  }, []);

  const changeSwiperHeight = (current) => {
    const ref = current === 0 ? swiperItem1 : swiperItem2;
    setSwiperViewHeight(ref.current.offsetHeight);
  };

  return (
    <View className="nav-menu-container">
      <Swiper
        ref={swiperRef}
        style={{ height: swiperViewHeight ? `${swiperViewHeight}px` : "auto" }}
        className="swiper"
        onChange={(e) => changeSwiperHeight(e.detail.current)}
      >
        <SwiperItem>
          <View className="menu-container" ref={swiperItem1}>
            {mainMenu.map((item) => (
              <View key={item.label}>
                <Image src={item.iconUrl} />
                <View>{item.label}</View>
              </View>
            ))}
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="menu-container" ref={swiperItem2}></View>
        </SwiperItem>
      </Swiper>
    </View>
  );
}
