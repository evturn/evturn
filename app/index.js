import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import configureStore from './store'
import initialState from 'containers/App/data'
import App from 'containers/App'
import 'assets/css/style.css'
import 'containers/App/style.css'

const hashHistory = createHashHistory({ queryKey: false })
const store = configureStore(initialState, hashHistory)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <HashRouter history={history}>
      <Match pattern="*" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
