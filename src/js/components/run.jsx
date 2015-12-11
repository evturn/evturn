'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { reduxReactRouter, match, routerStateReducer, ReduxRouter } from 'redux-router';
import { history } from 'history';
import { Router, Route, IndexRoute } from 'react-router';

import { store } from 'stores';

import App from './App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';

ReactDOM.render((
  <Provider store={ store } >
    <Router history={ history } >
      <Route path="/" component={ App } >
        <IndexRoute component={ Home } />
        <Route path="work" component={ Work } >
          <Route path="projects/:id" component={ Work } />
        </Route>
        <Route path="about" component={ About } />
        <Route path="contact" component={ Contact } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('site-container'));