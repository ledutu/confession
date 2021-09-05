import {all, fork} from 'redux-saga/effects';
import User from './User';
import Question from './Question';

export default function* rootSaga() {
  yield all([fork(User), fork(Question)]);
}
