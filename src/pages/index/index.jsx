import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [placeholder, setPlaceholder] = useState("请输入商家或商品名称");

  useLoad(() => {
    setRecommendWord();
  });

  const setRecommendWord = () => {
    const words = ["黄焖鸡", "砂锅粥"];
    setPlaceholder(Math.random() > 0.5 ? words[0] : words[1]);
  };

  const navigateToSearch = () => {
    Taro.navigateTo({
      url: "/pages/search/search",
    });
  };

  return (
    <View className="index-wrapper">
      <View className="index-container">
        <View className="search-bar" onClick={navigateToSearch}>
          <AtIcon
            value="search"
            size="12"
            color="#666"
            className="search-bar-icon"
          />
          <Text className="search-bar-text">{placeholder}</Text>
          <View className="search-bar-btn">搜索</View>
        </View>
      </View>
    </View>
  );
}
