import * as Rx from 'rxjs'

import {
  TOGGLE_MENU,
  PAGE_TRANSITION
} from './constants'

export const pageTransition = page => (
  (actions, store) => (
    Rx.Observable.of(page)
      .map(x => ({ type: PAGE_TRANSITION, payload: page }))
  )
)

export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)