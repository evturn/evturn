import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'

import Web from'./components/Web'
import IOS from './components/IOS'
import OSS from './components/OSS'

const createRoutes = ({ site }) => (
  <Route component={App} path='/'>
    <IndexRoute component={Home} />

    <Route component={Projects} path='work'>
      <IndexRoute component={Web} />
      <Route component={Web} path='web'>
        <Route component={Web} path=':id' />
      </Route>
      <Route component={_ => IOS(site)} path='ios' />
      <Route component={_ => OSS(site)} path='oss' />
    </Route>

    <Route component={_ => About(site)} path='about' />
  </Route>
)

export default createRoutes
