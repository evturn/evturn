import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import LazyLoad, { importDefault } from 'containers/LazyLoad'
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
          <LazyLoad modules={{
            Web:     _ => importDefault(import('containers/Web')),
            Project: _ => importDefault(import('containers/Project'))
          }}>
            {({ Web, Project }) =>
              <Web {...props}>
                {props => <Project {...props} />}
              </Web>}
          </LazyLoad>
        } />
        <Match pattern='/software' render={props =>
          <LazyLoad modules={{Software: _ => importDefault(import('containers/Software'))}}>
            {({ Software }) => <Software {...props} />}
          </LazyLoad>
        } />
        <Match pattern='/mobile' render={props =>
          <LazyLoad modules={{Mobile: _ => importDefault(import('containers/Mobile'))}}>
            {({ Mobile }) => <Mobile {...props} />}
          </LazyLoad>
        } />
      </div>
    </Router>
  )
}

export default App

