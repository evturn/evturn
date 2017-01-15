import React from 'react'
import { render } from 'react-dom'
import './manifest.json'
import App from 'containers/App'
import OfflinePluginRuntime from 'offline-plugin/runtime'
import 'sanitize.css/sanitize.css'
import 'containers/App/analytics'

render(<App />, document.getElementById('app'))

OfflinePluginRuntime.install()