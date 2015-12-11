'use strict';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import thunk from 'redux-thunk';
import { devTools } from 'redux-devtools';
import { workReducer, aboutReducer } from 'reducers'
import { default as techData } from 'sources/tech';
import { default as projectData } from 'sources/projects';

const SET_ABOUT = 'SET_ABOUT';
const SET_PROJECT = 'SET_PROJECT';
const reducer = combineReducers({ workReducer, aboutReducer });
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(reducer);

export function setProject(id) {
  const { project } = findProjectById(parseInt(id));
  console.log(project);
  project.tech = findTechByIds(project.techIds);

  return store.dispatch({ type: 'SET_PROJECT', project });
}

function findProjectById(id = 4, fallback = 4) {
  let found = false;
  let project = null;

  projectData.map((p, i) => {
    if (p.id === id) {
      project = p
      found = true;
    } else if ((projectData.length - 1 === i) && !found && project === null) {
      project = projectData[fallback];
    }
  });

  return { project };
}

function findTechByIds(ids) {
  const projectTech = [];

  for (let id of ids) {
    for (let t of techData) {
      if (id === t.id) {
        projectTech.push(t);
      }
    }
  }

  console.log(projectTech);
  return projectTech;
}

