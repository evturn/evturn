import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import configureStore from 'api/store'
import initialState from 'containers/App/data'
import 'sanitize.css/sanitize.css'
import 'config/analytics'

const Root = store => {
  return _ => (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root(configureStore(initialState))