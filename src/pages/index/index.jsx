import { View, Text, ScrollView, Image } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useRef, useState } from "react";
import { Tag } from "@taroify/core";
import { Search } from "@taroify/icons";
import NavMenu from "./components/nav-menu";
import SHot from "./components/s-hot";
import "./index.scss";
import MerchantList from "./components/merchant-list";
import FilterMenu from "./components/filter-menu";
import { useEffect } from "react";
import { getMerchantList } from "../../services";
import goodsData from "./components/merchant-list/data";
import { goodModel } from "./components/merchant-list/data";
import NavBar from "../../components/navbar";

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
  const merchantListRef = useRef(null);
  const isReachBottom = useRef(false);

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

  const onReachBottom = () => {
    if (isReachBottom.current) return;
    isReachBottom.current = true;
    const mlist = merchantListRef.current;
    mlist.setLoading(true);
    setTimeout(() => {
      if (merchantList.length >= 50) {
        mlist.setHasMore(false);
      } else {
        for (let i = 0; i < 10; i++) {
          merchantList.push({ ...goodModel });
        }
        setMerchantList([...merchantList]);
        mlist.setHasMore(true);
      }
      mlist.setLoading(false);
      isReachBottom.current = false;
    }, 1000);
  };

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
    <View>
      <NavBar />
      <ScrollView
        className="index-wrapper"
        enableFlex
        scrollY
        onScroll={onContainerScroll}
        onScrollToLower={onReachBottom}
      >
        <View className="index-container">
          <View className="search-container pd-container">
            <View className="search-bar" onClick={navigateToSearch}>
              <Search className="search-bar-icon" />
              <Text className="search-bar-text">{placeholder}</Text>
              <View className="search-bar-btn">搜索</View>
            </View>
            <View className="search-tags">
              {searchTags.map((tag) => (
                <Tag
                  className="search-tags-item"
                  shape="rounded"
                  size="medium"
                  key={tag}
                  onClick={() => navigateToSearch(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </View>
          </View>
          <View className="pd-container">
            <NavMenu />
          </View>
          {/* <SHot /> */}
          <FilterMenu ref={filterMenuRef} />
          <View className="pd-container">
            <MerchantList ref={merchantListRef} list={merchantList} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
