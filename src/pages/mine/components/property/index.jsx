import { Image, Text, View } from "@tarojs/components";
import Panel from "../panel";
import "./index.scss";
import { useMemo } from "react";
import classNames from "classnames";
import { observer } from "mobx-react";
import useLogin from "@/hooks/useLogin";

function MyProperty(props) {
  const isLogin = useLogin();
  const noLoginData = useMemo(() => props.noLoginData, [props.noLoginData]);
  const columns = 3;

  return (
    <Panel title="我的资产" className="my-property">
      {isLogin ? (
        <View className="flex-sc-wrap">已登录</View>
      ) : (
        <View className="flex-sc-wrap">
          {noLoginData.map((item, i) => (
            <View
              className={classNames({
                "nologin-item": true,
                "flex-sc": i % columns === 0,
                "flex-cc": i % columns !== 0,
              })}
              key={item.label}
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

export default observer(MyProperty);
