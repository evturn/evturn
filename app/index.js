import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Match, Miss, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import configureStore from './store'
import initialState from 'containers/App/data'
import App from 'containers/App'
import 'assets/css/style.css'
import 'containers/App/style.css'

const store = configureStore(initialState, createHashHistory({ queryKey: false }))
const history = syncHistoryWithStore(createHashHistory({ queryKey: false }), store)

render(
  <Provider store={store}>
    <HashRouter history={history}>
      <Match pattern="*" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
