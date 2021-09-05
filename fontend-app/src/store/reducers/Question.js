import actions from 'store/actions';
import {reducerAdvance, reducerDefault} from 'store/common/reducers';

const question = (...rest) => {
  return reducerAdvance(...rest, actions.GET_QUESTION);
};

const questionDetails = (...rest) => {
  return reducerDefault(...rest, actions.GET_QUESTION_DETAILS);
};

export default {
  question,
  questionDetails,
};
