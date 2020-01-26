import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MoviesScreen from "../src/Routes/Movies";
import TVScreen from "../src/Routes/TV";
import SearchScreen from "../src/Routes/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../src/components/TabBarIcon";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
  {
    //첫 번째 인자는 탭에 대한 각각의 설정을 해줄수 있다.
    Movie: {
      screen: createStack(MoviesScreen, "Movies"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    TV: {
      screen: createStack(TVScreen, "TV"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, "Search"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    }
  },
  {
    //  두 번째 인자는 탭 전체에 관한 설정을 한꺼번에 한다.
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
