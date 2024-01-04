import Mock from "mockjs";
import HomeApi from "./mockData/home";

Mock.mock("/home/menu", HomeApi.getHomeMenu());
