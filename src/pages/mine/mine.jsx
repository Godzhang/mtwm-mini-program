import { View, Text, Navigator, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Arrow } from "@taroify/icons";
import "./mine.scss";
import MineLogin from "./components/login";
import Panel from "./components/panel";
import { abilityData, recommendData, noLoginProperties } from "./data";
import { useState } from "react";
import MyProperty from "./components/property";
import MyCollection from "./components/collection";
import MTLoading from "@/components/loading";

export default function Mine() {
  const [isLoading, setLoading] = useState(false);

  const requestData = () => {};

  useLoad(() => {
    requestData();
  });

  const renderPanelMenu = (data) => {
    return (
      <View className="menu-list">
        {data.map((item) => (
          <Navigator className="menu-item" key={item.label} url={item.router}>
            <Image mode="aspectFit" className="menu-item-img" src={item.icon} />
            <Text className="menu-item-text">{item.label}</Text>
          </Navigator>
        ))}
      </View>
    );
  };

  return (
    <View className="mine-container">
      <View className="mine-wrapper">
        <MineLogin setLoading={setLoading} />
        <View className="mine-card">
          <MyProperty noLoginData={noLoginProperties}></MyProperty>
        </View>
        <View className="mine-card">{/* <MyCollection></MyCollection> */}</View>
        <View className="mine-card">
          {/* <Panel
            title="我的钱包"
            headerClass="my-purse-panel-header"
            headerRight={
              <Navigator className="add-purse" url="/pages/purse/purse">
                <Text className="add-purse-text">添加钱包</Text>
                <Arrow />
              </Navigator>
            }
          ></Panel> */}
        </View>
        <View className="mine-card">
          {/* <Panel title="我的功能">{renderPanelMenu(abilityData)}</Panel> */}
        </View>
        <View className="mine-card">
          {/* <Panel title="更多推荐">{renderPanelMenu(recommendData)}</Panel> */}
        </View>
      </View>
      <MTLoading open={isLoading}></MTLoading>
    </View>
  );
}
