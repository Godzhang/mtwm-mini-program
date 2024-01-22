import { View } from "@tarojs/components";
import "./index.scss";
import { useEffect } from "react";
import Taro from "@tarojs/taro";

export default function NavBar(props) {
  useEffect(() => {
    console.log(Taro.getMenuButtonBoundingClientRect());
  }, []);

  return (
    <View className="nav-bar">
      <View className="container">123</View>
    </View>
  );
}
