import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import initialState from 'store/api';
import rootReducer from 'reducers';

const thunkmasterFlex = ({ dispatch, getState }) => {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
};

const middleware = !window.__DEV__ ?  applyMiddleware(thunkmasterFlex) : applyMiddleware(thunkmasterFlex, logger());
const store = createStore(rootReducer, initialState, middleware);

export default store;