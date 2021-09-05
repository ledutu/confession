import {combineReducers} from 'redux';
import Common from './Common';
import Question from './Question';
import User from './User';

const RootReducer = combineReducers({
  ...Common,
  ...Question,
  ...User,
});

export default RootReducer;
