import actions, {_onFail, _onSuccess} from 'store/actions';
import {api, handleError, queryStringBody} from 'utils';
import {put, takeLatest} from 'redux-saga/effects';

function* login(payload) {
  try {
    const res = yield api.post(
      'auth/login',
      queryStringBody(payload.body),
      payload.params,
    );
    yield put({type: _onSuccess(actions.LOGIN_ACCOUNT), data: res});
  } catch (error) {
    yield put({type: _onFail(actions.LOGIN_ACCOUNT)});
    handleError(error);
  }
}

export default function* User() {
  yield takeLatest(actions.LOGIN_ACCOUNT, login);
}
