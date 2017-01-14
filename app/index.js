import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import 'public/manifest.json'
import 'sanitize.css/sanitize.css'
import 'containers/App/analytics'

render(<App />, document.getElementById('app'))

if (!__DEV__) {
  require('offline-plugin/runtime').install()
}