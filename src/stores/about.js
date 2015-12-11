'use strict';
import { createStore } from 'redux'
import aboutReducer from 'reducers/about'

let store = createStore(aboutReducer);