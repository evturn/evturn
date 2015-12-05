'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { createHistory } from 'history'
import { Home } from './home/Home';
import { Work } from './work/Work';
import { Project } from './work/project';
import { Contact } from './contact/Contact';
import { About } from './about/About';
import { Header } from './layouts/Header';

/**
 * App DOM element
 *
 */

const el = document.getElementById('site-container');

/**
 * Helper
 *
 * Each route passes its location to the App
 * and the parent element's class is updated.
 */

const updateLayout = (location) => {
  const { pathname } = location;
  const key = pathname.split('/')[1] || 'index';

  el.removeAttribute('class');
  el.classList.add(`page-${key}`);
};

const App = React.createClass({
  render() {
    updateLayout(this.props.location);

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
), el);