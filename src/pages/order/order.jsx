import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./order.scss";

export default function Order() {
  useLoad(() => {
    console.log("order Page loaded.");
  });

  return (
    <View className="index">
      <Text>Order</Text>
    </View>
  );
}
