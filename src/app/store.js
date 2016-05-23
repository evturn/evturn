import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { reduxObservable } from 'redux-observable'
import createReducer from './reducers'
import logger from 'redux-logger'

const observableMiddleware = reduxObservable()

const configureStore = (initialState, history) => {
  const middlewares = [
    observableMiddleware,
    routerMiddleware(history)
  ]

  if (__DEV__) {
    middlewares.push(logger())
  }

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  )

  return store
}

export default configureStore
