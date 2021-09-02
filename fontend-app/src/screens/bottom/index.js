import {routes} from 'utils';
import Home from './Home';
import Question from './Question';
import Notification from './Notification';
import Profile from './Profile';

export default {
  [routes.HOME_SCREEN]: Home,
  [routes.QUESTION_SCREEN]: Question,
  [routes.NOTIFICATION_SCREEN]: Notification,
  [routes.PROFILE_SCREEN]: Profile,
};
