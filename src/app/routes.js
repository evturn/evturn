import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Work from'containers/Work';
import WorkWeb from'components/WorkWeb';
import WorkIOS from'components/WorkIOS';
import WorkOSS from'components/WorkOSS';
import About from 'containers/About';
import Contact from 'containers/Contact';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home} name='home' />
    <Route component={About} path='about' name='about' />
    <Route component={Contact} path='contact' name='contact' />
    <Route component={Work} path='work' name='work'>
      <IndexRoute component={WorkWeb} />
      <Route component={WorkWeb} path='web'>
        <Route component={WorkWeb} path=':id' />
      </Route>
      <Route component={WorkIOS} path='ios' />
      <Route component={WorkOSS} path='oss' />
    </Route>
  </Route>
);