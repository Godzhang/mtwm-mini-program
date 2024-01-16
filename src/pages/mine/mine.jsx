import { View, Text, Navigator } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Arrow } from "@taroify/icons";
import "./mine.scss";
import { Space } from "@taroify/core";
import MineLogin from "./components/login";
import Panel from "./components/panel";

export default function Mine() {
  useLoad(() => {
    console.log("mine Page loaded.");
  });

  return (
    <View className="mine-container">
      <View className="mine-wrapper">
        <MineLogin />
        <View className="mine-card">
          <Panel title="我的资产"></Panel>
        </View>
        <View className="mine-card">
          <Panel title="我的收藏"></Panel>
        </View>
        <View className="mine-card">
          <Panel
            title="我的钱包"
            headerClass="my-purse-panel-header"
            headerRight={
              <Navigator className="add-purse" url="/pages/purse/purse">
                <Text className="add-purse-text">添加钱包</Text>
                <Arrow />
              </Navigator>
            }
          ></Panel>
        </View>
        <View className="mine-card">
          <Panel title="我的功能"></Panel>
        </View>
        <View className="mine-card">
          <Panel title="更多推荐"></Panel>
        </View>
      </View>
    </View>
  );
}
