import actions, {_onFail, _onSuccess} from 'store/actions';
import {api, queryStringBody} from 'utils';
import {put, takeLatest} from 'redux-saga/effects';

function* login(payload) {
  try {
    console.log('sagas');
    const res = yield api.post(
      'auth/login',
      queryStringBody(payload.body),
      payload.params,
    );
    yield put({type: _onSuccess(actions.LOGIN_ACCOUNT), data: res.data});
  } catch (error) {
    yield put({type: _onFail(actions.LOGIN_ACCOUNT)});
  }
}

export default function* User() {
  yield takeLatest(actions.LOGIN_ACCOUNT, login);
}
