import * as Rx from 'rxjs'

import {
  TOGGLE_MENU,
} from './constants'

export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)
