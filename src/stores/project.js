'use strict';
import { createStore } from 'redux'
import projectReducer from 'reducers/project'

let store = createStore(projectReducer);