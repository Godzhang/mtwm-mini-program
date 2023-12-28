import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./search.scss";

export default function Search() {
  useLoad(() => {
    console.log("Search Page loaded.");
  });

  return (
    <View className="search">
      <Text>Search</Text>
    </View>
  );
}
