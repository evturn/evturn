import React from 'react'
import App from 'containers/App'
import GoogleAnalytics from 'components/GoogleAnalytics'
import 'sanitize.css/sanitize.css'

const Root = _ => {
  return (
    <GoogleAnalytics>
      <App />
    </GoogleAnalytics>
  )
}

export default Root