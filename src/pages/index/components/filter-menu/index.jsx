import { ScrollView, View } from "@tarojs/components";
import { forwardRef, useImperativeHandle, useState } from "react";
import "./index.scss";
import { AtTag } from "taro-ui";
import classNames from "classnames";
import Taro from "@tarojs/taro";

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
        <ScrollView scrollX className="quick-tags">
          {quickTags.map((tag) => (
            <AtTag
              className="tag"
              key={tag}
              type="primary"
              active={selectTagsId.includes(tag)}
              onClick={() => onClickTag(tag)}
            >
              {tag}
            </AtTag>
          ))}
          <AtTag style={{ opacity: 0 }}></AtTag>
        </ScrollView>
        <AtTag className="atag">123</AtTag>
        {/* <View className="menu-icon-bg">
          <View className="at-icon at-icon-menu menu-icon"></View>
        </View> */}
      </View>
    </View>
  );
});

export default FilterMenu;
