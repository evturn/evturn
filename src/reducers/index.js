'use strict';

import { combineReducers } from 'redux'
import { projects } from 'sources/projects';

const loadProject = (params=4) => {
  const id = parseInt(params);
  const iterateProjects = (id) => {
    for (let p of projects) {
      if (p.id === parseInt(id)) { return p; }
    }
  };

  const result = iterateProjects(id);
  const fallback = iterateProjects(4);

  if (result) {
    _project[result.id] = result;
  } else {
    _project[fallback.id] = fallback;
  }
};


const projects = (state = [], action) => {
  switch (action.type) {
      case 'LOAD_PROJECTS':
        return Object.assign({}, state, {
          projects
        });
      case 'LOAD_PROJECT':
        return Object.assign({}, state, {
          project: loadProject(params);
        });
    }
    return true;
  }