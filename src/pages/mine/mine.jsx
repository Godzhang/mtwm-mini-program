import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./mine.scss";
import { Space } from "@taroify/core";
import Panel from "./components/panel";

export default function Mine() {
  useLoad(() => {
    console.log("mine Page loaded.");
  });

  return (
    <View className="mine-container">
      <View className="wrapper">
        {/* <Space direction="vertical"> */}
        <Panel title="我的资产"></Panel>
        <Panel title="我的收藏"></Panel>
        <Panel title="我的钱包"></Panel>
        <Panel title="我的功能"></Panel>
        <Panel title="更多推荐"></Panel>
        {/* </Space> */}
      </View>
    </View>
  );
}
