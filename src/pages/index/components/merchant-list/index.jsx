import { View, Image, Text } from "@tarojs/components";
import "./index.scss";
import { useState, useMemo } from "react";
import { Cell, Empty, Flex, List, Loading } from "@taroify/core";
import { usePageScroll, useReachBottom } from "@tarojs/taro";

export default function MerchantList(props) {
  const list = useMemo(() => props.list || [], [props.list]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const isEmpty = useMemo(() => props.list.length === 0, [props.list]);

  usePageScroll(({ scrollTop: aScrollTop }) => {
    setScrollTop(aScrollTop);
  });

  // useReachBottom(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     if (list.length >= 40) {
  //       setHasMore(false);
  //     } else {
  //       for (let i = 0; i < 10; i++) {
  //         const text = list.length + 1;
  //         list.push(text < 10 ? "0" + text : String(text));
  //       }
  //       setList([...list]);
  //       setHasMore(true);
  //     }
  //     setLoading(false);
  //   }, 1000);
  // });

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
        <Flex className="merchant-panel" key={item} gutter="10">
          <Flex.Item span="7">
            <Image
              className="merchant-img"
              mode="widthFix"
              src={require(`/src/assets/goods/goods-img.png`)}
            />
          </Flex.Item>
          <Flex.Item span="17">
            <View className="merchant-title flex-bc">
              <View className="flex-sc">
                {item.hasPromotion && (
                  <Image
                    className="ticket"
                    src={require("/src/assets/merchant/list/quan.png")}
                    mode="heightFix"
                  />
                )}
                <Text className="title single-line">{item.title}</Text>
              </View>
              {item.isGolden && (
                <Image
                  className="medal"
                  src={require("/src/assets/merchant/list/medal.png")}
                  mode="heightFix"
                />
              )}
            </View>
            <View className="merchant-sales flex-bc">
              <View>
                <Text>{item.score}分</Text>
                <Text>月售{item.salesNumber}</Text>
                <Text>人均￥{item.aPrice}</Text>
              </View>
              <Text>美团快送</Text>
            </View>
            <View className="merchant-express flex-bc">
              <View>
                <Text>起送￥{item.start}</Text>
                <Text>配送</Text>
                <Text>约￥{item.expressPrice}</Text>
              </View>
              <View>
                <Text>{item.time}分钟</Text>
                <Text>{item.distant}km</Text>
              </View>
            </View>
            <View className="merchant-comment">
              {item.comment.map((item) => (
                <Text key={item}>{item}</Text>
              ))}
            </View>
            <View className="merchant-promotion">
              {item.promotion &&
                item.promotion.length > 0 &&
                item.promotion.map((item) => <Text key={item}>{item}</Text>)}
              {item.promotion2 &&
                item.promotion2.length > 0 &&
                item.promotion2.map((item) => <Text key={item}>{item}</Text>)}
            </View>
          </Flex.Item>
        </Flex>
      ))}
      <List.Placeholder>
        {loading && <Loading>加载中...</Loading>}
        {!hasMore && "没有更多了"}
      </List.Placeholder>
    </List>
  );
}
