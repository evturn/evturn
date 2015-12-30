import ReactDOM from 'react-dom';
import {default as Spinner} from 'components/spinner';

ReactDOM.render(<Spinner />, document.getElementById('loading'));


import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import {default as App} from 'containers/app';
import {default as Home} from 'containers/home';
import {default as About} from 'containers/about';
import {default as Contact} from 'containers/contact';
import {default as Work} from 'containers/work';

const history = createHashHistory({queryKey: false});
ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="work(/:id)" component={Work} />
    </Route>
  </Router>
), document.getElementById('site-container'));