import { View, Text } from "@tarojs/components";
import "./index.scss";
import { useMemo } from "react";
import { Space } from "@taroify/core";

export default function Panel(props) {
  const title = useMemo(() => props.title || "", [props.title]);

  const renderHeaderRight = () => {
    return <Text>213</Text>;
  };

  return (
    <View className="panel">
      <View className="header flex-bc">
        <Text className="title">{title}</Text>
        <View className="handler">{renderHeaderRight()}</View>
      </View>
      <View className="content">{props.children}</View>
    </View>
  );
}
