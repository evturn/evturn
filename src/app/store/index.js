import { createStore, applyMiddleware, compose } from 'redux'
import { reduxObservable } from 'redux-observable'
import rootReducer from 'reducers'
import logger from 'redux-logger'
import initialState from 'data'

let middleware = applyMiddleware(reduxObservable())

if (__DEV__) {
  middleware = compose(applyMiddleware(reduxObservable(), logger()))
}

const store = createStore(
  rootReducer,
  initialState,
  middleware
)

export default store