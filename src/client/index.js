import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from '../shared/routes';
import Spinner from 'components/Spinner';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

render(<Spinner />, document.getElementById('kurt-loader'));
render(
  <Router history={history}>
    {routes}
  </Router>, document.getElementById('site-container')
);