import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import initialState from 'store/api'
import rootReducer from 'reducers'

const thunkmasterFlex = ({ dispatch, getState }) => {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
}

let middleware = applyMiddleware(thunkmasterFlex)

if (__DEV__) {
  middleware = compose(
    applyMiddleware(thunkmasterFlex, logger()),
    window.devToolsExtension()
  )
}

const store = createStore(rootReducer, initialState, middleware)

export default store