import * as Rx from 'rxjs'

import {
  TOGGLE_MENU,
  MOBILE_SITE
} from './constants'

export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)
