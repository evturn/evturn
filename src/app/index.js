import React from 'react'
import * as Rx from 'rxjs'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'

import configureStore from './store'
import createRoutes from './routes'

import initialState from 'data'

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
    />
  </Provider>,
  document.getElementById('app')
)
