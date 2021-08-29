import actions from 'store/actions';
import {reducerAdvance, reducerDefault} from 'store/common/reducers';

const login = (...rest) => {
  return reducerDefault(...rest, actions.LOGIN_ACCOUNT);
};

const userInfo = (...rest) => {
  return reducerAdvance(...rest, actions.GET_USER_INFORMATION);
};

export default {
  login,
  userInfo,
};
