import { ScrollView, View } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
import { AtTag } from "taro-ui";

const quickTags = ["津贴优惠", "跨天预订", "减配送费", "点评高分"];

export default function FilterMenu() {
  const [filterOptions, setFilterOptions] = useState({});
  const [selectTagsId, setSelectTagsId] = useState([]);

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
    <View className="filter-menu">
      <ScrollView scrollX enableFlex className="quick-tags">
        <View className="quick-tags-area">
          {quickTags.map((tag) => (
            <AtTag
              className="tag"
              key={tag}
              active={selectTagsId.includes(tag)}
              onClick={() => onClickTag(tag)}
            >
              {tag}
            </AtTag>
          ))}
          <AtTag></AtTag>
        </View>
      </ScrollView>
      <View className="quick-tags-gradient-mask"></View>
      <View className="menu-icon-">
        <View className="at-icon at-icon-menu menu-icon"></View>
      </View>
    </View>
  );
}
