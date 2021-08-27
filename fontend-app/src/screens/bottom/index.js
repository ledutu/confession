import {routes} from 'utils';
import HomeScreen from './Home';
import NotificationScreen from './Notification';
import ProfileScreen from './Profile';

export default {
  [routes.HOME_SCREEN]: HomeScreen,
  [routes.NOTIFICATION_SCREEN]: NotificationScreen,
  [routes.PROFILE_SCREEN]: ProfileScreen,
};
