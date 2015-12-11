'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history';
import { App } from './App';
import { Home, Work, About, Project, Contact, Footer, Header } from '../views';

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