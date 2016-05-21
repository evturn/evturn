import { createStore, applyMiddleware, compose } from 'redux'
import { reduxObservable } from 'redux-observable'
import logger from 'redux-logger'
import initialState from 'store/api'
import rootReducer from 'reducers'

let middleware = applyMiddleware(reduxObservable())

if (__DEV__) {
  middleware = compose(applyMiddleware(reduxObservable(), logger()), window.devToolsExtension())
}

const store = createStore(
  rootReducer,
  initialState,
  middleware
)

export default store