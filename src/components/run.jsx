'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';

import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { reduxReactRouter, match, routerStateReducer, ReduxRouter, pushState } from 'redux-router';
import { createHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';
import { devTools } from 'redux-devtools';

import { App } from './App';
import { Home } from 'Home';
import { About } from 'About';
import { Contact } from 'Contact';
import { Work } from 'Work';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Home } />
    <Route path="work" component={ Work } >
      <Route path="projects(/:id)" component={ Work } />
    </Route>
    <Route path="about" component={ About } />
    <Route path="contact" component={ Contact } />
  </Route>
);

import { default as projectReducer } from 'reducers/project';

const reducer = combineReducers({
  router: routerStateReducer,
  app: projectReducer
});

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer);

connect(
  state => ({ q: state.router.location.query.q }),
  { pushState }
)(App);

ReactDOM.render((
  <Provider store={ store } >
    <Router >
      { routes }
    </Router>
  </Provider>
), document.getElementById('site-container'));