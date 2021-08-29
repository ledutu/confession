import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';

const login = (...rest) => {
  return reducerDefault(...rest, actions.LOGIN_ACCOUNT);
};

export default {
  login,
};
