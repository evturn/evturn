'use strict';

import { MapStore } from 'flux/utils';

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