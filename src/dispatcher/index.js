'use strict';

import Dispatcher from 'flux';
import Proto from '@evturn/proto';

const ProtoDispatcher = Proto.extend(Dispatcher);

export const AppDispatcher = ProtoDispatcher.extend({
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});






