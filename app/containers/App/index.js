import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Match } from 'react-router'
import initialState from 'containers/App/data'
import Navigation from 'containers/Navigation'
import configureStore from 'api/store'
import 'sanitize.css/sanitize.css'
import 'config/analytics'

const store = configureStore(initialState)

const App = _ => (
  <Provider store={store}>
    <HashRouter>
      <Match pattern="*" component={Navigation} />
    </HashRouter>
  </Provider>
)

export default App
