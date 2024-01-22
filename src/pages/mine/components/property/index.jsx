import { Image, Text, View } from "@tarojs/components";
import Panel from "../panel";
import "./index.scss";
import { useMemo } from "react";
import useLogin from "../../../../hooks/useLogin";
import { Grid } from "@taroify/core";

export default function MyProperty(props) {
  const isLogin = useLogin();
  const noLoginData = useMemo(() => props.noLoginData, [props.noLoginData]);

  return (
    <Panel title="我的资产" className="my-property">
      {isLogin ? (
        <View className="flex-sc">已登录</View>
      ) : (
        <View className="flex-sc-wrap">
          {noLoginData.map((item) => (
            <View
              className="nologin-item flex-sc"
              key={item.label}
              style={{ width: item.width }}
            >
              {typeof item.icon === "string" ? (
                <Image
                  className="nologin-item-img"
                  src={item.icon}
                  mode="aspectFit"
                />
              ) : (
                <Image
                  className="nologin-item-img"
                  src={item.icon[0]}
                  mode="aspectFit"
                />
              )}
              <Text className="nologin-item-text">{item.label}</Text>
            </View>
          ))}
        </View>
      )}
    </Panel>
  );
}
