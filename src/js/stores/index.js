'use strict';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import thunk from 'redux-thunk';
import { devTools } from 'redux-devtools';
import { workReducer, aboutReducer } from 'reducers';

const SET_ABOUT = 'SET_ABOUT';
const SET_PROJECT = 'SET_PROJECT';
const SET_FEATURED = 'SET_FEATURED';
const reducer = combineReducers({ workReducer, aboutReducer });
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(reducer);