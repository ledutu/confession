import {routes} from 'utils';
import HomeScreen from './Home';
import QuestionScreen from './Question';
import NotificationScreen from './Notification';
import ProfileScreen from './Profile';

export default {
  [routes.HOME_SCREEN]: HomeScreen,
  [routes.QUESTION_SCREEN]: QuestionScreen,
  [routes.NOTIFICATION_SCREEN]: NotificationScreen,
  [routes.PROFILE_SCREEN]: ProfileScreen,
};
