import actions, {_onFail, _onSuccess} from 'redux/actions';
import {api} from 'utils';
import {put, takeLatest} from 'redux-saga/effects';

function* login() {
  try {
    const res = yield api.get('auth/login');
    yield put({type: _onSuccess(actions.LOGIN_ACCOUNT), data: res.data});
  } catch (error) {
    yield put({type: _onFail(actions.LOGIN_ACCOUNT)});
  }
}

export default function* User() {
  yield takeLatest(actions.LOGIN_ACCOUNT, login);
}
