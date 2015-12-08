'use strict';

import { Store } from 'flux/utils';
import { AppDispacter } from 'dispatcher/app';

/* Constructs and registers an instance of this store with the given dispatcher */

/*
  Cache data
  Expose public getters to access data (never have public setters)
  Respond to specific actions from the dispatcher
  Always emit a change when their data changes
  Only emit changes during a dispatch
 */