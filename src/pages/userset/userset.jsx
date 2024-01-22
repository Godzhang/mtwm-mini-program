import { Cell } from "@taroify/core";
import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../store";
import "./userset.scss";

function UserSet() {
  const { authStore } = useRootStore();
  const { isLogin } = authStore;

  const back = () => {
    Taro.navigateBack();
  };

  const logout = async () => {
    if (isLogin) {
      await authStore.logout();
    }
    back();
  };

  return (
    <View className="user-set">
      {isLogin ? (
        <Cell>
          <Button onClick={logout}>退出登录</Button>
        </Cell>
      ) : (
        <Button onClick={back}>返回</Button>
      )}
    </View>
  );
}

export default observer(UserSet);
