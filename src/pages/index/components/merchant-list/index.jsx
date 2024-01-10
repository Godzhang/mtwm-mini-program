import { View, Image } from "@tarojs/components";
import "./index.scss";
import { useState, useMemo } from "react";
import { Cell, Empty, Flex, List, Loading } from "@taroify/core";
import { usePageScroll, useReachBottom } from "@tarojs/taro";

export default function MerchantList(props) {
  // const list = props.list || [];
  const isEmpty = useMemo(() => props.list.length === 0, [props.list]);

  const [hasMore, setHasMore] = useState(true);
  const [list, setList] = useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
  ]);
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  usePageScroll(({ scrollTop: aScrollTop }) => {
    setScrollTop(aScrollTop);
  });

  useReachBottom(() => {
    setLoading(true);
    setTimeout(() => {
      if (list.length >= 40) {
        setHasMore(false);
      } else {
        for (let i = 0; i < 10; i++) {
          const text = list.length + 1;
          list.push(text < 10 ? "0" + text : String(text));
        }
        setList([...list]);
        setHasMore(true);
      }
      setLoading(false);
    }, 1000);
  });

  return isEmpty ? (
    <Empty>
      <Empty.Image src="error" />
      <Empty.Description>结果为空</Empty.Description>
    </Empty>
  ) : (
    <List
      className="merchant-list"
      loading={loading}
      hasMore={hasMore}
      scrollTop={scrollTop}
    >
      {list.map((item) => (
        // <Cell key={item}>{item}</Cell>
        <Flex className="merchant-item" key={item} gutter="10">
          <Flex.Item span="7">
            <Image
              className="merchant-cover"
              mode="widthFix"
              src={require(`/src/assets/goods/goods-img.png`)}
            />
          </Flex.Item>
          <Flex.Item span="17">2</Flex.Item>
        </Flex>
      ))}
      <List.Placeholder>
        {loading && <Loading>加载中...</Loading>}
        {!hasMore && "没有更多了"}
      </List.Placeholder>
    </List>
  );
}
