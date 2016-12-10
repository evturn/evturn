import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from 'api/reducers'

export default function configureStore(initialState) {
  const middleware = [thunkmasterFlex]

  if (__DEV__) {
    middleware.push(logger())
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  return store
}

function thunkmasterFlex({ dispatch , getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}