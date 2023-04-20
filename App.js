import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AL_GA from "./src/screens/AL_GA";
import ID_MA from "./src/screens/ID_MA";
import MI_NM from "./src/screens/MI_NM";
import NY_SD from "./src/screens/NY_SD";
import TN_WY from "./src/screens/TN_WY";
import Canada from "./src/screens/Canada";
import Mexico from "./src/screens/Mexico";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AL_GA: AL_GA,
    ID_MA: ID_MA,
    MI_NM: MI_NM,
    NY_SD: NY_SD,
    TN_WY:TN_WY,
    Canada: Canada,
    Mexico: Mexico,
    },
    {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'T.R.U.C.R.',
    },
  }
);

export default createAppContainer(navigator);
