import * as Rx from 'rxjs'

import {
  TOGGLE_MENU,
  CHANGE_HEX
} from './constants'

export const changeHex = bool => (
  (actions, store) => (
    Rx.Observable.of(bool)
      .map(hex => ({ type: CHANGE_HEX, payload: { hex } }))
  )
)

export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)