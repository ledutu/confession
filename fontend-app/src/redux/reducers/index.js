import {combineReducers} from 'redux';
import User from './User';

const RootReducer = combineReducers({
  ...User,
});

export default RootReducer;
