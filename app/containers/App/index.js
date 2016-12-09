import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Header from 'containers/Header'
import Home from 'containers/Home'
import ProjectCards from 'containers/ProjectCards'
import css from './style.css'

export const App = props => {
  return (
    <Router>
      <div className={css.root}>
        <Header />
        <Match pattern='/' render={props =>
          <div>
            <Home />
            <ProjectCards />
          </div>
        } />
      </div>
    </Router>
  )
}

export default App
