'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Router, RouteHandler, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { default as App } from 'App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { default as Project } from 'Project';

const history = createHistory({ queryKey: false });

render((
  <Router history={ history } >
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="work(/projects/:projectId)" component={ Work } >
        <IndexRoute component={ Project } />
        <Route path="/projects/:projectId" component={ Project } />
      </Route>
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('site-container'));