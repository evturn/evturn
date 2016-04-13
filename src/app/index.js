import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';

const history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app')
);