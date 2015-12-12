'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history'

import { default as App } from 'App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { default as Project } from 'Project';

ReactDOM.render((
  <Router >
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="work" component={ Work } >
        <Route path="projects(/:id)" component={ Project } />
      </Route>
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('site-container'));