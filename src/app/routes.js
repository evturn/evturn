import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'

import Projects from'./containers/Projects'
import Carousel from'components/Carousel'
import WorkIOS from'./components/WorkIOS'
import WorkOSS from'./components/WorkOSS'
import About from './containers/About'

const createRoutes = _ => (
  <Route component={App} path='/'>

    <IndexRoute component={Home} />

    <Route component={Projects} path='work'>
      <IndexRoute component={Carousel} />
      <Route component={Carousel} path='web'>
        <Route component={Carousel} path=':id' />
      </Route>
      <Route component={WorkIOS} path='ios' />
      <Route component={WorkOSS} path='oss' />
    </Route>

    <Route component={About} path='about' />
  </Route>
)

export default createRoutes
