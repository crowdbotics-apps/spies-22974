import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings3178713Navigator from '../features/Settings3178713/navigator';
import UserProfile4178712Navigator from '../features/UserProfile4178712/navigator';
import NotificationList7178710Navigator from '../features/NotificationList7178710/navigator';
import Messaging7178709Navigator from '../features/Messaging7178709/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings3178713: { screen: Settings3178713Navigator },
UserProfile4178712: { screen: UserProfile4178712Navigator },
NotificationList7178710: { screen: NotificationList7178710Navigator },
Messaging7178709: { screen: Messaging7178709Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
