import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
// import { createStore} from 'redux';
// import rootReducer from '../shared/reducers';
import configureStore from 'shared/store';
import routes from 'shared/routes';
import Spinner from 'components/Spinner';

const store = configureStore();
// const store = createStore(rootReducer);
const history = useRouterHistory(createHashHistory)({ queryKey: false });

// render(<Spinner />, document.getElementById('kurt-loader'));
render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>, document.getElementById('site-container')
);