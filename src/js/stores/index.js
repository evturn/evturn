'use strict';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import thunk from 'redux-thunk';
import { devTools } from 'redux-devtools';
import { workReducer, aboutReducer } from 'reducers'

const SET_ABOUT = 'SET_ABOUT';
const SET_PROJECT = 'SET_PROJECT';
const SET_FEATURED = 'SET_FEATURED';
const reducer = combineReducers({ workReducer, aboutReducer });
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(reducer);

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

  return projectTech;
}


/* Set Project */

export function setProject(id) {
  const { project } = findProjectById(parseInt(id));
  project.tech = findTechByIds(project.techIds);

  return store.dispatch({ type: 'SET_PROJECT', project });
}


/* Set Thumbnails */

export function setFeaturedProjects() {
  const featured = [];

  for (let p of projectData) {
    if (p.featured) { featured.push(p); }
  }

  return store.dispatch({
    type: 'SET_FEATURED',
    projects: featured
  });
}