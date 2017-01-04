import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import LazyLoad from 'containers/LazyLoad'
import Header from 'containers/Header'
import Home from 'containers/Home'
import css from './style.css'

export const App = props => {
  return (
    <Router>
      <div className={css.root}>
        <Header />
        <Match pattern='/' exactly component={Home} />
        <Match pattern='/web' render={props =>
          <LazyLoad modules={{web: _ => import('containers/Web')}}>
            {({ web: { default:Web }}) => <Web {...props} />}
          </LazyLoad>
        } />
        <Match pattern='/software' render={props =>
          <LazyLoad modules={{software: _ => import('containers/Software')}}>
            {({ software: { default:Software }}) => <Software {...props} />}
          </LazyLoad>
        } />
        <Match pattern='/mobile' render={props =>
          <LazyLoad modules={{mobile: _ => import('containers/Mobile')}}>
            {({ mobile: { default:Mobile }}) => <Mobile {...props} />}
          </LazyLoad>
        } />
      </div>
    </Router>
  )
}

export default App

