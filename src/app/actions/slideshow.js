import * as Rx from 'rxjs'

export const LOAD_SLIDESHOW = 'LOAD_SLIDESHOW'
export const UPDATE_ACTIVE_SLIDE = 'UPDATE_ACTIVE_SLIDE'
export const UNMOUNT_SLIDESHOW = 'UNMOUNT_SLIDESHOW'

export const createSlideshow = id => (
  (actions, store) => {
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

    return Rx.Observable.merge(slideshow$, interval$)
})

export const tearDownCarousel = subscription$ => (
  (actions, store) => {
    subscription$.unsubscribe()
    return Rx.Observable.of({ type: UNMOUNT_SLIDESHOW })
  }
)