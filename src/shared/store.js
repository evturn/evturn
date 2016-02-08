import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();
const thunk = thunkMiddleware;
const middleware = applyMiddleware(logger, thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware);
};