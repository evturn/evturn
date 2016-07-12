import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
import rootEpic from './epics'
import rootReducer from './reducers'
import logger from 'redux-logger'


function configureStore(initialState, history) {
  const middlewares = [
    createEpicMiddleware(rootEpic),
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
