import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Home from 'containers/Home'

import css from './style.css'

class App extends Component {
  render() {
    return (
      <div className={css.root}>
        <Router>
          <Match pattern='/' component={Home} />
        </Router>
      </div>
    )
  }
}

export default connect(null)(App)
