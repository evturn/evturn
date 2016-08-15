import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory, applyRouterMiddleware } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'react-router-scroll'
import { createHashHistory } from 'history'
import configureStore from './store'
import createRoutes from './routes'
import initialState from 'containers/App/data'

import 'containers/App/style.css'

const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(initialState)

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
)
