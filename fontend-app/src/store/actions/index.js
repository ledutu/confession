export default {
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
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