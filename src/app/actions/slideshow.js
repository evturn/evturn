import * as Rx from 'rxjs'

export const LOAD_SLIDESHOW = 'LOAD_SLIDESHOW'
export const UPDATE_ACTIVE_SLIDE = 'UPDATE_ACTIVE_SLIDE'
export const UNMOUNT_SLIDESHOW = 'UNMOUNT_SLIDESHOW'

export const createSlideshow = id => (
  (actions, store) => {
    const slideshow$ = Rx.Observable.of(id)
      .map(x => !isNaN(parseInt(x)) ? parseInt(x) : 1)
      .flatMap(id => (
        Rx.Observable.from(store.getState().slideshow.projects)
          .filter(app => app.id === id)
          .map(project => ({
            project,
            id: project.id,
            images: project.images.map((x, i) => {
              x.active = i === 0
              return x
            })
          }))
      ))

    slideshow$.map(payload => ({ type: LOAD_SLIDESHOW, payload }))

    slideshow$
      .flatMap(x => (
        Rx.Observable.interval(4000)
          .take(x.images.length)
          .repeat()
          .map(interval => (
            x.images.map((image, i) => {
              image.active = interval === i
              return image
            })
          ))
      ))
      .map(x => ({ type: UPDATE_ACTIVE_SLIDE, payload: { images: x } }))

    return slideshow$
})

export const tearDownCarousel = subscription$ => (
  (actions, store) => {
    subscription$.unsubscribe()
    return Rx.Observable.of({ type: UNMOUNT_SLIDESHOW })
  }
)