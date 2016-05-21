import * as Rx from 'rxjs'

export const TOGGLE_MENU = 'TOGGLE_MENU'
export const PAGE_TRANSITION = 'PAGE_TRANSITION'

export const pageTransition = page => (
  (actions, store) => (
    Rx.Observable.of(page)
      .map(x => ({ type: PAGE_TRANSITION, payload: page }))
  )
)

export const toggleMenu = _ => (
  (actions, store) => Rx.Observable.of({ type: TOGGLE_MENU })
)