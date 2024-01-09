import { ScrollView, View, Text } from "@tarojs/components";
import { forwardRef, useImperativeHandle, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import Taro from "@tarojs/taro";
import { Tag } from "@taroify/core";
import { WapNav } from "@taroify/icons";

const quickTags = ["津贴优惠", "跨天预订", "减配送费", "点评高分"];

const FilterMenu = forwardRef((props, ref) => {
  const [filterOptions, setFilterOptions] = useState({});
  const [selectTagsId, setSelectTagsId] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  useImperativeHandle(ref, () => ({ onScroll }));

  const onScroll = () => {
    const query = Taro.createSelectorQuery();
    query.select(".filter-menu-container").boundingClientRect();
    query.exec(([banner]) => {
      if (banner.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  };

  const onClickTag = (tag) => {
    const index = selectTagsId.indexOf(tag);
    if (index !== -1) {
      selectTagsId.splice(index, 1);
      setSelectTagsId([...selectTagsId]);
    } else {
      setSelectTagsId([...selectTagsId, tag]);
    }
  };

  return (
    <View className="filter-menu-container">
      <View
        className={classNames({
          "filter-menu": true,
          "sticky-menu": isSticky,
        })}
      >
        <ScrollView
          className="quick-tags"
          scrollX
          enhanced
          showScrollbar={false}
        >
          {quickTags.map((tag) => (
            <Tag
              className={classNames({
                tag: true,
                active: selectTagsId.includes(tag),
              })}
              key={tag}
              size="large"
              onClick={() => onClickTag(tag)}
            >
              {tag}
            </Tag>
          ))}
          <Tag style={{ opacity: 0 }}></Tag>
        </ScrollView>
        {/* TODO: fix后按钮消失问题 */}
        <View className="menu-icon-bg">
          <WapNav className="menu-icon" />
        </View>
      </View>
    </View>
  );
});

export default FilterMenu;
