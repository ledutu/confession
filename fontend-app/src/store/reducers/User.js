import actions from 'store/actions';
import {reducerDefault} from 'store/common/reducers';

const login = (...rest) => {
  return reducerDefault(...rest, actions.LOGIN_ACCOUNT);
};

export default {
  login,
};
