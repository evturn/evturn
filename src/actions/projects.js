'use strict';

import {List, Map} from 'immutable';

export function setProjects(state, projects) {
  return state.set('projects', List(projects))
}

function queryProjects(id) {
  for (let project of projects) {
    if (project.id === parseInt(id)) {
      return project;
    }
  }
}

const defaultId = 4;

export function setProject(id = defaultId) {
  const result = queryProjects(parseInt(id));

  if (result) { return result; }
  else { return queryProjects(id); }
}