import { View, Image, Text } from "@tarojs/components";
import "./index.scss";
import { Button, Space, Empty } from "@taroify/core";

export default function OrderLogin(props) {
  const login = () => {
    props.loginChange(true);
  };

  return (
    <View className="order-login-page">
      {props.login ? (
        <View>登录成功</View>
      ) : (
        <View className="login-area">
          <Empty>
            <Empty.Image src="search" />
            <Empty.Description>
              您还没有登录，请登录后查看订单
            </Empty.Description>
          </Empty>
          <Button className="mt-login-btn" onClick={login}>
            登录
          </Button>
        </View>
      )}
    </View>
  );
}
