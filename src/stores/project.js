'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import projectReducer from 'reducers/project'

const store = applyMiddleware((thunk),
  reduxReactRouter({
  routes,
  createHistory
  }),
  devTools()(createStore);


const projectStore = createStoreWithMiddleware(projectReducer);