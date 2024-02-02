import { Text, View } from "@tarojs/components";
import { observer } from "mobx-react";
import Panel from "../panel";
import "./index.scss";
import useLogin from "@/hooks/useLogin";
import { Button } from "@taroify/core";
import { Plus } from "@taroify/icons";

function MyCollection() {
  const isLogin = useLogin();

  return (
    <Panel className="my-collection" title="我的收藏">
      {isLogin ? (
        <View className="login-box"></View>
      ) : (
        <View className="no-login-box flex-bc">
          <Text className="collection-tip">
            暂无收藏，添加收藏更快找到你的菜~
          </Text>
          <Button
            className="collection-btn"
            variant="contained"
            color="primary"
            icon={<Plus />}
            size="small"
          >
            添加收藏
          </Button>
        </View>
      )}
    </Panel>
  );
}

export default observer(MyCollection);
