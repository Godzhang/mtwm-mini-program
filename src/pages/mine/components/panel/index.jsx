import { View, Text } from "@tarojs/components";
import "./index.scss";
import { useMemo } from "react";
import { Space } from "@taroify/core";

export default function Panel(props) {
  const headerClass = useMemo(
    () => ["header", "flex-bc", props.headerClass].join(" "),
    [props.headerClass]
  );

  return (
    <View className={["panel", props.className].join(" ")}>
      <View className={headerClass}>
        <View className="title">{props.title}</View>
        <View>{props.headerRight}</View>
      </View>
      <View className="content">{props.children}</View>
    </View>
  );
}
