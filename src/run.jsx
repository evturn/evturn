import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {default as App} from 'containers/app';
import {default as Home} from 'containers/home';
import {default as About} from 'containers/about';
import {default as Contact} from 'containers/contact';
import {default as Work} from'containers/work';

const history = browserHistory;
const el = document.getElementById('site-container');

ReactDOM.render((
  <Router history={history}>
    <Route component={App} path='/' >
      <IndexRoute component={Home} name='home' />
      <Route component={About} path='about' name='about' />
      <Route component={Contact} path='contact' name='contact' />
      <Route component={Work} path='work(/:id)' name='work' />
    </Route>
  </Router>
), el);