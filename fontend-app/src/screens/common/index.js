import {routes} from 'utils';
import AddQuestion from './AddQuestion';
import RateQuestion from './RateQuestion';
import SettingProfile from './SettingProfile';

export default {
  [routes.SETTING_PROFILE_SCREEN]: SettingProfile,
  [routes.ADD_QUESTION_SCREEN]: AddQuestion,
  [routes.RATE_QUESTION_SCREEN]: RateQuestion,
};
