export default {
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
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
