import {reset} from 'navigator/RootNavigation';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from 'store/actions';
import {
  api,
  handleError,
  queryStringBody,
  routes,
  storage,
  storageKey,
} from 'utils';

function* login(payload) {
  try {
    const res = yield api.post(
      'auth/login',
      queryStringBody(payload.body),
      payload.params,
    );
    yield storage.setItem(storageKey.TOKEN_BEARER, res.access_token);
    yield storage.setItem(storageKey.TOKEN_USER, res.user);
    yield put({type: _onSuccess(actions.LOGIN_ACCOUNT), data: res});
    reset(0, routes.BOTTOM_TAB);
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.LOGIN_ACCOUNT)});
  }
}

export default function* User() {
  yield takeLatest(actions.LOGIN_ACCOUNT, login);
}
