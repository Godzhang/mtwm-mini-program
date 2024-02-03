import { Image, Text, View, Navigator } from "@tarojs/components";
import { SettingOutlined } from "@taroify/icons";
import "./index.scss";
import { useState, useMemo } from "react";
import Taro from "@tarojs/taro";
import { showErrorToast } from "../../../../utils/utils";
import { TOKEN_KEY } from "../../../../global";
import { observer } from "mobx-react";
import { useRootStore } from "../../../../store";

function MineLogin() {
  const { authStore } = useRootStore();
  const { isLogin, login: authLogin } = authStore;
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

  const login = async () => {
    try {
      await authLogin();
      // Taro.reLaunch(当前页面);
    } catch (error) {
      showErrorToast(error.message || error.msg || error);
    }
  };

  return (
    <View className="mine-login flex-bc">
      <View className="user flex-sc">
        <Image className="avatar" src={userInfo.avatarUrl} />
        {isLogin ? (
          <Text className="username">{userInfo.username}</Text>
        ) : (
          <Text className="username" onClick={login}>
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

export default observer(MineLogin);
