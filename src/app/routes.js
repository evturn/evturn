import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Projects from'./containers/Projects'

import Carousel from'components/Carousel'
import IOS from './components/IOS'
import OSS from './components/OSS'

const createRoutes = ({ site }) => (
  <Route component={App} path='/'>

    <IndexRoute component={Home} />

    <Route component={Projects} path='work'>
      <IndexRoute component={Carousel} />
      <Route component={Carousel} path='web'>
        <Route component={Carousel} path=':id' />
      </Route>
      <Route component={_ => IOS(site.work.iOS)} path='ios' />
      <Route component={_ => OSS(site.work.OSS)} path='oss' />
    </Route>

    <Route component={About} path='about' />
  </Route>
)

export default createRoutes
