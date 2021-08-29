import {combineReducers} from 'redux';
import User from './User';
import Common from './Common';

const RootReducer = combineReducers({
  ...User,
  ...Common,
});

export default RootReducer;
