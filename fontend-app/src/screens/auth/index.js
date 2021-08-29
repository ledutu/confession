import {routes} from 'utils';
import ForgetPass from './ForgetPass';
import ReSignIn from './ReSignIn';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default {
  [routes.SIGN_IN_SCREEN]: SignIn,
  [routes.SIGN_UP_SCREEN]: SignUp,
  [routes.FORGET_PASS_SCREEN]: ForgetPass,
  [routes.RE_SIGN_IN_SCREEN]: ReSignIn,
};
