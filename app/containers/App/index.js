import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Header from 'containers/Header'
import Home from 'containers/Home'
import Web from 'containers/Web'
import Software from 'containers/Software'
import Mobile from 'containers/Mobile'
import css from './style.css'

export const App = props => {
  return (
    <Router>
      <div className={css.root}>
        <Header />
        <Match pattern='/' exactly component={Home} />
        <Match pattern='/web' component={Web} />
        <Match pattern='/software' component={Software} />
        <Match pattern='/mobile' component={Mobile} />
      </div>
    </Router>
  )
}

export default App
