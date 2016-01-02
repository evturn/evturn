import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import {App} from 'containers/app';
import {Home} from 'containers/home';
import {About} from 'containers/about';
import {Contact} from 'containers/contact';
import {Work} from'containers/work';

const router = (
  <Router history={createHashHistory({queryKey: false})}>
    <Route component={App} path='/' >
      <IndexRoute component={Home} name='home' />
      <Route component={About} path='about' name='about' />
      <Route component={Contact} path='contact' name='contact' />
      <Route component={Work} path='work(/:id)' name='work' />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('site-container'));