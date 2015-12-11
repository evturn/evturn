'use strict';

import {setProject, setProjects} from 'actions/projects';

export default function reducer(state, action) => {
  switch (action.type) {
    case 'SET_PROJECT':
      return setProject(state, action.project);
    case 'SET_PROJECTS':
      return setProjects(state, action.projects);
    }
  return state;
}