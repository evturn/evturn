'use strict';

import Dispatcher from 'flux';
import Proto from '@evturn/proto';
import { projects } from 'sources/projects';

const ProtoDispatcher = Proto.extend(Dispatcher);

export const AppDispatcher = ProtoDispatcher.extend({
  loadProject(params=4) {
    // Conver params - String -> Number
    const id = parseInt(params);

    // Find project.id matching params.id
    const iterateProjects = (id) => {
      for (let p of projects) {
        if (p.id === parseInt(id)) { return p; }
      }
    };

    // Perform query
    const result = iterateProjects(id);
    const fallback = iterateProjects(4);

    // Project found
    if (result) { return result; }

    // Params were invalid
    else { return fallback; }

  },
  loadProjects() {
    return  projects;
  },
  handleProjectsAction(action) {
    this.dispatch({
      source: 'PROJECTS_ACTION',
      action: action
    });
  }
});






