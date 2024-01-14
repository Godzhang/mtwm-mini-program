import { View, Image, Text } from "@tarojs/components";
import "./index.scss";
import { Button, Space, Empty } from "@taroify/core";

export default function OrderLogin() {
  const login = () => {};

  return (
    <View className="order-login-page">
      <View className="login-area">
        <Empty>
          <Empty.Image src="search" />
          <Empty.Description>您还没有登录，请登录后查看订单</Empty.Description>
        </Empty>
        <Button className="mt-login-btn" onClick={login}>
          登录
        </Button>
      </View>
    </View>
  );
}
