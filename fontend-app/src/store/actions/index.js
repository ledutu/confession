export default {
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  GET_USER_INFORMATION: 'GET_USER_INFORMATION',
  GET_QUESTION: 'GET_QUESTION',
  GET_QUESTION_DETAILS: 'GET_QUESTION_DETAILS',

  OPEN_MODAL_LOAD: 'OPEN_MODAL_LOAD',
  CLOSE_MODAL_LOAD: 'CLOSE_MODAL_LOAD',
};

export const _onSearch = action => {
  return action + '_SEARCH';
};
export const _onSuccess = action => {
  return action + '_SUCCESS';
};
export const _onFail = action => {
  return action + '_FAIL';
};
export const _onUnmount = action => {
  return action + '_UNMOUNT';
};