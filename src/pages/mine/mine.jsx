import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./mine.scss";

export default function Mine() {
  useLoad(() => {
    console.log("mine Page loaded.");
  });

  return (
    <View className="index">
      <Text>mine</Text>
    </View>
  );
}
