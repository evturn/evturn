import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import {default as App} from 'containers/app';
import {default as Home} from 'containers/home';
import {default as About} from 'containers/about';
import {default as Contact} from 'containers/contact';
import {default as Work} from'containers/work';

const router = (
  <Router history={createHashHistory()}>
    <Route component={App} path='/' >
      <IndexRoute component={Home} name='home' />
      <Route component={About} path='about' name='about' />
      <Route component={Contact} path='contact' name='contact' />
      <Route component={Work} path='work(/:id)' name='work' />
    </Route>
  </Router>
);

React.render(router, document.getElementById('site-container'));