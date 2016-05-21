import * as Rx from 'rxjs'

export const TOGGLE_MENU = 'TOGGLE_MENU'
export const PAGE_TRANSITION = 'PAGE_TRANSITION'

export const pageTransition = props => (
  (actions, store) =>
    Rx.Observable.of(props)
      .map(x => ({ type: PAGE_TRANSITION, payload: x }))
)
export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)