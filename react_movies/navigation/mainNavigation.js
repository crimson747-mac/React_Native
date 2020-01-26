import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../src/Routes/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tab: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {
    headerMode: "screen",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);
