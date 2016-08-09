import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'

import Web from './containers/Projects/Web'
import IOS from './containers/Projects/IOS'
import OSS from './containers/Projects/OSS'

export default state => (
  <Route component={App} path='/'>
    <IndexRoute component={Home} />

    <Route component={Projects} path='work'>
      <IndexRoute component={Web} />
      <Route component={Web} path='web'>
        <Route component={Web} path=':id' />
      </Route>
      <Route component={_ => IOS(state.projects)} path='ios' />
      <Route component={_ => OSS(state.projects)} path='oss' />
    </Route>

    <Route component={_ => About(state.content)} path='about' />
  </Route>
)
