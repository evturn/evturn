import * as Rx from 'rxjs'

import {
  LOAD_SLIDESHOW,
  UPDATE_ACTIVE_SLIDE,
  TEAR_DOWN_CAROUSEL
} from './constants'

export const tearDownCarousel = _ => (
  (actions, store) => Rx.Observable.of({ type: TEAR_DOWN_CAROUSEL })
)

export const createSlideshow = id => (
  (actions, store) => {
    store.dispatch(
      actions => Rx.Observable.of({ type: TEAR_DOWN_CAROUSEL })
    )

    const selection$ = Rx.Observable.of(id)
      .map(x => !isNaN(parseInt(x)) ? parseInt(x) : 1)
      .flatMap(id => (
        Rx.Observable.from(store.getState().slideshow.projects)
          .filter(app => app.id === id)
          .map(app => ({
            project: app,
            id: app.id,
            images: app.images.map((x, i) => {
              x.active = i === 0
              return x
            })
          }))
      ))

    const slideshow$ = selection$
      .map(payload => ({ type: LOAD_SLIDESHOW, payload }))

    const interval$ = selection$
      .flatMap(app => (
        Rx.Observable.interval(4000)
          .take(app.images.length)
          .repeat()
          .map(interval => (
            app.images.map((x, i) => {
              x.active = interval === i
              return x
            })
          ))
      ))
      .map(x => ({ type: UPDATE_ACTIVE_SLIDE, payload: { images: x } }))
      .takeUntil(actions.ofType(TEAR_DOWN_CAROUSEL))

    return Rx.Observable.merge(slideshow$, interval$)
})
