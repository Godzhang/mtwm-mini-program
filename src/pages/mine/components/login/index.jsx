import { Image, Text, View, Navigator } from "@tarojs/components";
import { SettingOutlined } from "@taroify/icons";
import "./index.scss";
import { useState, useMemo } from "react";
import Taro from "@tarojs/taro";
import { login } from "@/services";
import { showErrorToast } from "../../../../utils/utils";

export default function MineLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const userInfo = useMemo(() => {
    return isLogin
      ? {
          avatarUrl: require("/src/assets/mine-icon/hualala.png"),
          username: "张小可",
        }
      : {
          avatarUrl: require("/src/assets/mine-icon/avatar-default.png"),
        };
  }, [isLogin]);

  const weLogin = () => {
    // setIsLogin(true);
    Taro.login({
      success(res) {
        if (res.code) {
          login(res.code);
        } else {
          showErrorToast("登录失败！" + res.errMsg);
        }
      },
      fail() {},
    });
  };

  return (
    <View className="mine-login flex-bc">
      <View className="user flex-sc">
        <Image className="avatar" src={userInfo.avatarUrl} />
        {isLogin ? (
          <Text className="username">{userInfo.username}</Text>
        ) : (
          <Text className="username" onClick={weLogin}>
            登录 / 注册
          </Text>
        )}
      </View>
      <Navigator className="setting flex-cc" url="/pages/userset/userset">
        <SettingOutlined className="setting-icon" size="25" />
      </Navigator>
    </View>
  );
}
