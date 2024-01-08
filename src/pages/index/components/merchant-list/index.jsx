import { View } from "@tarojs/components";
import "./index.scss";
import { useMemo } from "react";

export default function MerchantList(props) {
  const list = props.list || [];
  const isEmpty = useMemo(() => list.length === 0, [props.list]);

  return isEmpty ? (
    <View>空</View>
  ) : (
    <View className="merchant-list">
      <View className="merchant-item"></View>
    </View>
  );
}
