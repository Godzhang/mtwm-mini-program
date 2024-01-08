import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { AtIcon, AtTag } from "taro-ui";
import { useRef, useState } from "react";
import NavMenu from "./components/nav-menu";
import SHot from "./components/s-hot";
import "./index.scss";
import MerchantList from "./components/merchant-list";
import FilterMenu from "./components/filter-menu";
import { useEffect } from "react";
import { getMerchantList } from "../../services";
import goodsData from "./components/merchant-list/data";

export default function Index() {
  const [placeholder, setPlaceholder] = useState("请输入商家或商品名称");
  const [searchTags] = useState([
    "烧烤烤串",
    "酒水",
    "酒便利",
    "炒藕丁",
    "砂锅粥",
    "便利店",
  ]);
  const [merchantList, setMerchantList] = useState([]);
  const filterMenuRef = useRef(null);

  useLoad(() => {
    requestIndexData();
    setRecommendWord();
  });

  useEffect(() => {
    // Taro.request({
    //   url: "/home/menu",
    // }).then((res) => {
    //   console.log(res);
    // });
  }, []);

  // 获取首页数据
  const requestIndexData = async () => {
    // const merchantList = await getMerchantList();
    // console.log("merchantList:", merchantList);
    const merchantList = goodsData;
    setMerchantList(merchantList);
  };

  const setRecommendWord = () => {
    const words = ["黄焖鸡", "砂锅粥"];
    setPlaceholder(Math.random() > 0.5 ? words[0] : words[1]);
  };

  const navigateToSearch = (tag = placeholder) => {
    let url = `/pages/search/search`;
    if (tag) {
      url += `?keyword=${tag}`;
    }
    Taro.navigateTo({ url });
  };

  const onContainerScroll = () => {
    filterMenuRef.current.onScroll();
  };

  return (
    <ScrollView
      className="index-wrapper"
      enableFlex
      scrollY
      onScroll={onContainerScroll}
    >
      <View className="index-container">
        <View className="search-container pd-container">
          <View className="search-bar" onClick={navigateToSearch}>
            <AtIcon
              value="search"
              size="12"
              color="#666"
              className="search-bar-icon"
            />
            <Text className="search-bar-text">{placeholder}</Text>
            <View className="search-bar-btn">搜索</View>
          </View>
          <View className="search-tags">
            {searchTags.map((tag) => (
              <AtTag
                className="search-tags-item"
                size="small"
                circle
                key={tag}
                onClick={() => navigateToSearch(tag)}
              >
                {tag}
              </AtTag>
            ))}
          </View>
        </View>
        <View className="pd-container">
          <NavMenu />
        </View>
        {/* <SHot /> */}
        <FilterMenu ref={filterMenuRef} />
        <View className="pd-container">
          <MerchantList list={merchantList} />
        </View>
      </View>
    </ScrollView>
  );
}
