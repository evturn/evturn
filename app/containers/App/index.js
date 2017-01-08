import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import LazyLoad, { importDefault } from 'containers/LazyLoad'
import Header from 'containers/Header'
import Home from 'containers/Home'
import css from './style.css'

export const App = props => {
  const Web = _ => importDefault(import('containers/Web'))
  const Software = _ => importDefault(import('containers/Software'))
  const Mobile = _ => importDefault(import('containers/Mobile'))
  const Contact = _ => importDefault(import('containers/Contact'))

  return (
    <Router>
      <div className={css.root}>
        <Header />

        <Match pattern='/' exactly component={Home} />

        <Match pattern='/web' render={props =>
          <LazyLoad modules={{ Web }}>
            {({ Web }) => <Web {...props} />}
          </LazyLoad>
        } />

        <Match pattern='/software' render={props =>
          <LazyLoad modules={{ Software }}>
            {({ Software }) => <Software {...props} />}
          </LazyLoad>
        } />

        <Match pattern='/mobile' render={props =>
          <LazyLoad modules={{ Mobile }}>
            {({ Mobile }) => <Mobile {...props} />}
          </LazyLoad>
        } />

        <Match pattern='/contact' render={props =>
          <LazyLoad modules={{ Contact }}>
            {({ Contact }) => <Contact {...props} />}
          </LazyLoad>
        } />
      </div>
    </Router>
  )
}

export default App

