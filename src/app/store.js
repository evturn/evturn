import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { reduxObservable } from 'redux-observable'
import createReducer from './reducers'
import logger from 'redux-logger'

const devtools = __DEV__ ? logger : (_ = noop => noop)

const middlewares = [
  reduxObservable()
]


const configureStore = initialState => {
  const enhancers = applyMiddleware(...middlewares, devtools())

  return createStore(
    createReducer(),
    initialState,
    compose(enhancers)
  )
}

export default configureStore
