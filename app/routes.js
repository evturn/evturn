import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'

import Web from './containers/Projects/Web'
import Mobile from './containers/Projects/Mobile'
import OSS from './containers/Projects/OSS'

export default state => (
  <Route component={App} path='/'>
    <IndexRoute component={Home} />

    <Route path='work' component={Projects}>
      <IndexRoute component={Web} />
      <Route path='web' component={Web}>
        <Route path=':slug' component={Web} />
      </Route>
      <Route path='mobile' component={_ => Mobile(state.projects)} />
      <Route path='oss' component={_ => OSS(state.projects)} />
    </Route>
    <Route path='about' component={_ => About(state.content)} />
  </Route>
)
