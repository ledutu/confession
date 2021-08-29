import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
