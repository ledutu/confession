import {goBack, reset} from 'navigator/RootNavigation';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess, _onUnmount} from 'store/actions';
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
    yield put({type: actions.GET_USER_INFORMATION});
    reset(0, routes.BOTTOM_TAB);
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.LOGIN_ACCOUNT)});
  }
}

function* logout(payload) {
  try {
    const res = yield api.get('user/logout', payload.params);
    yield storage.removeItem(storageKey.TOKEN_BEARER);
    yield storage.removeItem(storageKey.TOKEN_USER);
    yield put({type: _onUnmount(actions.LOGIN_ACCOUNT)});
    yield put({type: _onUnmount(actions.GET_USER_INFORMATION)});
    yield put({type: _onSuccess(actions.LOGOUT_ACCOUNT), data: res});
    goBack();
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.LOGOUT_ACCOUNT)});
  }
}

function* getUserInformation(payload) {
  try {
    yield put({type: actions.OPEN_MODAL_LOAD});
    const res = yield api.get('user/me', payload.params);
    yield put({type: _onSuccess(actions.GET_USER_INFORMATION), data: res});
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.GET_USER_INFORMATION)});
  } finally {
    yield put({type: actions.CLOSE_MODAL_LOAD});
  }
}

export default function* User() {
  yield takeLatest(actions.LOGIN_ACCOUNT, login);
  yield takeLatest(actions.LOGOUT_ACCOUNT, logout);
  yield takeLatest(actions.GET_USER_INFORMATION, getUserInformation);
}
