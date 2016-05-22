import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'containers/App'
import Home from 'containers/Home'
import Work from'containers/Work'
import Carousel from'components/Carousel'
import WorkIOS from'components/WorkIOS'
import WorkOSS from'components/WorkOSS'
import About from 'containers/About'

const createRoutes = _ => (
  <Route component={App} path='/'>
    <IndexRoute component={Home} name='home' />
    <Route component={About} path='about' name='about' />
    <Route component={Work} path='work' name='work'>
      <IndexRoute component={Carousel} />
      <Route component={Carousel} path='web'>
        <Route component={Carousel} path=':id' />
      </Route>
      <Route component={WorkIOS} path='ios' />
      <Route component={WorkOSS} path='oss' />
    </Route>
  </Route>
)

export default createRoutes
