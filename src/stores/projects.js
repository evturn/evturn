'use strict';

import { MapStore } from 'flux/utils';
import { AppDispatcher } from 'dispatcher';
import { Constants } from 'constants';
import { Proto } from '@evturn/proto';

const ProtoStore = Proto.extend(MapStore);
/* Extends ReduceStore and defines the state as an immutable map
 * This is a simple store. It allows caching key value pairs.
 *
 *    reduce(state, action) {
 *      switch (action.type) {
 *        case 'foo':
 *          return state.set(action.id, action.foo);
 *        case 'bar':
 *          return state.delete(action.id);
 *        default:
 *          return state;
 *      }
 *    }
 */

let _projects = {};
let _project = {};

const loadProjects = (data) => {
  _projects = data.projects;
};

const loadProject = (data) => {
  _project = data.project;
};

const ProjectsStore = ProtoStore.extend({
  getProjects() {
    return _projects;
  },
  getProject() {
    return _project;
  }
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  };
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch(action.actionType) {
    case Constants.LOAD_PROJECTS:
      loadProjects(action.data);
      break;
    case Constants.LOAD_PROJECT:
      loadProject(action.data);
      break;
    default:
      return;
  }

  ProjectsStore.emitChange();
  return;
});