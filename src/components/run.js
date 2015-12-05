import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouteHandler, IndexRoute } from 'react-router';
import { Home } from './home/Home';
import { Work } from './work/Work';
import { Contact } from './contact/Contact';
import { About } from './about/About';
import { Header } from './layouts/Header';

class App extends React.Component {
  render() {
    return (
      <div className="site-container">
        <Header />
        <div id="site-content" className="site-content">
          { this.props.children }
        </div>
        <footer className="site-footer"></footer>
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="work" component={ Work } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('site-container'));