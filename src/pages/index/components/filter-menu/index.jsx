import { View } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

export default function FilterMenu() {
  const [filterOptions, setFilterOptions] = useState({});
  return <View className="filter-menu"></View>;
}
