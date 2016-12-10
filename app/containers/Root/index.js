import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import GoogleAnalytics from 'components/GoogleAnalytics'
import configureStore from 'api/store'
import initialState from 'containers/App/data'
import 'sanitize.css/sanitize.css'

const Root = store => {
  return _ => (
    <Provider store={store}>
      <GoogleAnalytics>
        <App />
      </GoogleAnalytics>
    </Provider>
  )
}

export default Root(configureStore(initialState))