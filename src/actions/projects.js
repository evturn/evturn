'use strict';

import React from 'react';
import { AppDispatcher } from 'dispatcher';
import { Constants } from 'constants';

/* Helper methods that facilitate passing data to the Dispatcher */

export const ProjectsActions = {
  getProjects: function(projects) {
    AppDispatcher.dispatch({
      actionType: Constants.LOAD_PROJECTS,
      projects: projects
    });
  },
  getProject: function(project) {
    AppDispatcher.dispatch({
      actionType: Constants.LOAD_PROJECT,
      project: project
    });
  }
};