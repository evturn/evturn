import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './reducers'
import logger from 'redux-logger'

const observableMiddleware = createEpicMiddleware()

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
    rootReducer,
    initialState,
    compose(...enhancers)
  )

  if (module.hot) {
    module.hot.accept('./reducers', _ => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
