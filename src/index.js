import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from 'containers/App';
import Home from 'containers/Home';
import Work from'containers/Work';
import About from 'containers/About';
import Contact from 'containers/Contact';
import Spinner from 'components/Spinner';

render(<Spinner />, document.getElementById('kurt-loader'));

const history = useRouterHistory(createHashHistory)({ queryKey: false })

render(
  <Router history={history}>
    <Route component={App} path='/' >
      <IndexRoute component={Home} name='home' />
      <Route component={About} path='about' name='about' />
      <Route component={Contact} path='contact' name='contact' />
      <Route component={Work} path='work(/:id)' name='work' />
    </Route>
  </Router>, document.getElementById('site-container')
);