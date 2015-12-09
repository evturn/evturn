'use strict';

import { createStore } from 'redux';
import { AppDispatcher } from 'dispatcher';
import { Constants } from 'constants';
import { Proto } from '@evturn/proto';

let _project = {};

createStore()



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
  }
});