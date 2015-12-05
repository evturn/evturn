import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouteHandler, IndexRoute, History } from 'react-router';
import { createHistory, useBasename } from 'history'
import { Home } from './home/Home';
import { Work, Project } from './work/Work';
import { Contact } from './contact/Contact';
import { About } from './about/About';
import { Header } from './layouts/Header';

const App = React.createClass({
  render() {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'index';
    document.querySelector('body').classList.add(`page-${key}`);

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
});

ReactDOM.render((
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="work" component={ Work }>
        <Route path="work/:id" component={ Project } />
      </Route>
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('site-container'));