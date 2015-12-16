'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteHandler, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
// import { default } from 'sources/google-analytics';
import { default as App } from 'components/app';
import { default as Home } from 'components/home';
import { default as About } from 'components/about';
import { default as Contact } from 'components/contact';
import { default as Work } from 'components/work';
import { default as Project } from 'components/work/project';

const history = createHistory({ queryKey: false });

ReactDOM.render((
  <Router history={ history } >
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
      <Route path="work(/projects/:projectId)" component={ Work } >
        <IndexRoute component={ Project } />
        <Route path="/projects/:projectId" component={ Project } />
      </Route>
    </Route>
  </Router>
), document.getElementById('site-container'));