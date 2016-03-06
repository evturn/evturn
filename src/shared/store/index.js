import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import initialState from 'store/api';
import rootReducer from 'reducers';

const middleware = !window.__DEV__ ?  applyMiddleware(thunk) : applyMiddleware(thunk, logger());
const store = createStore(rootReducer, initialState, middleware);

export default store;