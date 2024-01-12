import { View } from "@tarojs/components";
import "./index.scss";

export default function FlexBetween() {
  return (
    <View className="flex-container">
      <View className="flex-item flex-left"></View>
      <View className="flex-item flex-right"></View>
    </View>
  );
}
