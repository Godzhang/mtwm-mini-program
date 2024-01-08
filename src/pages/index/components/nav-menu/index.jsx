import { Image, Swiper, SwiperItem, View, Text } from "@tarojs/components";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { mainMenu, subMenu } from "./data";
import "./index.scss";
import { getElHeight, sleep } from "@/utils/utils";

//http://iph.href.lu/100x300?text=自定义文字

export default function NavMenu() {
  const swiperRef = useRef(null);
  const swiperItem1 = useRef(null);
  const swiperItem2 = useRef(null);
  const [swiperViewHeight, setSwiperViewHeight] = useState(0);
  const [current, setCurrent] = useState(0);
  const [pMenus, setPMenus] = useState([]);
  const defaultDisplayConfig = { row: 3, col: 5 };
  const displaySwiperNum = useMemo(() => {
    return Math.ceil(
      (mainMenu.length + subMenu.length) /
        (defaultDisplayConfig.row * defaultDisplayConfig.col)
    );
  }, []);

  useEffect(() => {
    const pMenus = getPaginationMenus(mainMenu, subMenu);
    setPMenus(pMenus);
    changeSwiperHeight(0);
  }, []);

  const getPaginationMenus = (
    mainMenu,
    subMenu,
    config = defaultDisplayConfig
  ) => {
    const totalLength = mainMenu.length + subMenu.length;
    const { row, col } = config;
    const singleNum = row * col;
    const menus = Array.from({
      length: Math.ceil(totalLength / singleNum),
    }).map(() => []);

    let menuIndex = 0;
    menus[menuIndex++].push(
      mainMenu,
      subMenu.slice(0, 5),
      subMenu.slice(5, 10)
    );

    for (let i = 10; i < subMenu.length; i += singleNum) {
      menus[menuIndex++].push(
        subMenu.slice(i, i + 5),
        subMenu.slice(i + 5, i + 10),
        subMenu.slice(i + 10, i + 15)
      );
    }

    return menus;
  };

  const changeSwiperHeight = async (current) => {
    const height = await getElHeight(`.menu-container-${current}`);
    setSwiperViewHeight(height);
    setCurrent(current);
  };

  return (
    <View className="nav-menu-container">
      <Swiper
        ref={swiperRef}
        style={{ height: swiperViewHeight ? `${swiperViewHeight}px` : "none" }}
        duration={200}
        onChange={(e) => changeSwiperHeight(e.detail.current)}
      >
        {pMenus.map((p, pIndex) => (
          <SwiperItem key={pIndex}>
            <View
              className={[`menu-container`, `menu-container-${pIndex}`].join(
                " "
              )}
              ref={pIndex === 0 ? swiperItem1 : swiperItem2}
            >
              {p.map((menu, index) => (
                <View className="menu-list" key={index}>
                  {menu.map((item) => (
                    <View className="menu-item" key={item.label}>
                      <Image
                        className={classNames({
                          "menu-item-img": true,
                          "menu-item-img-main": item.isMain,
                        })}
                        src={item.iconUrl}
                      />
                      <Text className="menu-item-label">{item.label}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </SwiperItem>
        ))}
      </Swiper>
      <View className="swiper-dots">
        {Array.from({ length: displaySwiperNum }).map((n, i) => (
          <View
            className={classNames({ dot: true, active: i === current })}
            key={i}
          >
            {n}
          </View>
        ))}
      </View>
    </View>
  );
}
