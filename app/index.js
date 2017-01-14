import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import 'public/manifest.json'
import 'sanitize.css/sanitize.css'
import 'containers/App/analytics'

render(<App />, document.getElementById('app'))

if (!__DEV__) {
  const OfflinePluginRuntime = require('offline-plugin/runtime')
  OfflinePluginRuntime.install({
    onUpdating:     _ => undefined,
    onUpdateReady:  _ => OfflinePluginRuntime.applyUpdate(),
    onUpdated:      _ => window.location.reload(),
    onUpdateFailed: _ => undefined,
  })
}