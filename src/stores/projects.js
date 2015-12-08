'use strict';

import { MapStore } from 'flux/utils';
import { AppDispatcher } from 'dispatcher';
import { Constants } from 'constants';
import { Proto } from '@evturn/proto';
import { projects } from 'sources/projects';

let _projects = {};
let _project = {};

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

const loadProjects = () => {
  _projects = projects;
};

const ProtoStore = Proto.extend(MapStore);
const ProjectsStore = ProtoStore.extend({
  getAll() {
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
  },
  dispatcherIndex: AppDispatcher.register((payload) => {
    const action = payload.action;

    switch(action.actionType) {
      case Constants.LOAD_PROJECTS:
        loadProjects(action.data);
        ProjectsStore.emitChange();
        break;
      case Constants.LOAD_PROJECT:
        loadProject(action.data);
        ProjectsStore.emitChange();
        break;
    }
    return true;
  }
});