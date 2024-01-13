import { View, Image, Text } from "@tarojs/components";
import "./index.scss";
import {
  useState,
  useMemo,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { Empty, Flex, List, Loading, Space, Tag } from "@taroify/core";
import { ArrowDown, ArrowUp } from "@taroify/icons";
import Taro, { usePageScroll, useReachBottom } from "@tarojs/taro";
import classNames from "classnames";

function MerchantList(props, ref) {
  const list = useMemo(() => props.list || [], [props.list]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [expandMap, setExpandMap] = useState(new Map());
  const isEmpty = useMemo(() => props.list.length === 0, [props.list]);

  const expandPanel = (item) => {
    if (!expandMap.has(item)) {
      expandMap.set(item, true);
    } else {
      expandMap.delete(item);
    }
    setExpandMap(new Map(expandMap));
  };

  useImperativeHandle(ref, () => ({ setLoading, setHasMore }));

  usePageScroll(({ scrollTop: aScrollTop }) => {
    setScrollTop(aScrollTop);
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
        <View
          className={classNames({
            "merchant-panel": true,
            expand: !!expandMap.get(item),
          })}
          key={item}
        >
          <View className="merchant-img">
            <Image
              mode="widthFix"
              // src={require(item.goodImg)}
              src={require(`/src/assets/goods/goods-img3.png`)}
            />
          </View>
          <View className="merchant-info">
            <View className="merchant-title flex-sc">
              {item.hasPromotion && (
                <Image
                  className="ticket"
                  src={require("/src/assets/merchant/list/quan.png")}
                  mode="heightFix"
                />
              )}
              <Text className="title single-line">{item.title}</Text>
              {item.isGolden && (
                <Image
                  className="medal"
                  src={require("/src/assets/merchant/list/medal.png")}
                  mode="heightFix"
                />
              )}
            </View>
            <View className="merchant-sales flex-bc">
              <Space size={10} align="center">
                <Text className="score">{item.score}分</Text>
                <Text>月售{item.salesNumber}</Text>
                <Text>人均￥{item.aPrice}</Text>
              </Space>
              {item.type ? (
                <Text
                  className={classNames({
                    type: true,
                    "type-fast": item.type === "美团快送",
                  })}
                >
                  {item.type}
                </Text>
              ) : null}
            </View>
            <View className="merchant-express flex-bc">
              <Space size={10} align="center">
                <Text>起送￥{item.start}</Text>
                <Text>配送</Text>
                <Text>约￥{item.expressPrice}</Text>
              </Space>
              <Space size={10} align="center">
                <Text>{item.time}分钟</Text>
                <Text>{item.distant}km</Text>
              </Space>
            </View>
            <Space className="merchant-comment" size={10}>
              {item.comment.map((item) => {
                if (typeof item === "string") {
                  return (
                    <View className="comment-tag" key={item}>
                      {item}
                    </View>
                  );
                } else {
                  return (
                    <View className="comment-tag medal flex-sc" key={item}>
                      <Image
                        className="medal-img"
                        src={require("/src/assets/merchant/list/medal-2.png")}
                        mode="heightFix"
                      />
                      {item.value}
                    </View>
                  );
                }
              })}
            </Space>
            <View
              className={classNames({
                "merchant-promotion": true,
                expand: !!expandMap.get(item),
              })}
            >
              <Space size={10}>
                {item.promotion &&
                  item.promotion.length > 0 &&
                  item.promotion.map((item) => (
                    <Text className="merchant-promotion-text" key={item}>
                      {item}
                    </Text>
                  ))}
                {item.promotion2 &&
                  item.promotion2.length > 0 &&
                  item.promotion2.map((item) => (
                    <Text className="merchant-promotion-text" key={item}>
                      {item}
                    </Text>
                  ))}
              </Space>
              {item.promotion?.length + item.promotion2?.length > 5 && (
                <View className="expand-btn" onClick={() => expandPanel(item)}>
                  {expandMap.get(item) ? (
                    <ArrowUp className="arrow" />
                  ) : (
                    <ArrowDown className="arrow" />
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      ))}
      <List.Placeholder>
        {loading && <Loading>加载中...</Loading>}
        {!hasMore && "没有更多了"}
      </List.Placeholder>
    </List>
  );
}

export default forwardRef(MerchantList);
