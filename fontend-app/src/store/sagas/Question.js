import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from 'store/actions';
import {api, handleError} from 'utils';

function* getQuestion(payload) {
  try {
    const res = yield api.get('question', payload.params);
    yield put({type: _onSuccess(actions.GET_QUESTION), data: res.data});
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.GET_QUESTION)});
  }
}

function* getQuestionDetails(payload) {
  try {
    const res = yield api.get('question/details', payload.params);
    yield put({type: _onSuccess(actions.GET_QUESTION_DETAILS), data: res});
  } catch (error) {
    yield handleError(error);
    yield put({type: _onFail(actions.GET_QUESTION_DETAILS)});
  }
}

export default function* Question() {
  yield takeLatest(actions.GET_QUESTION, getQuestion);
  yield takeLatest(actions.GET_QUESTION_DETAILS, getQuestionDetails);
}
