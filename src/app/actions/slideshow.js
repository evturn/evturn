import { Observable } from 'rx'
import store from 'store'

const actions = {
  LOAD_SLIDESHOW:      payload  => ({ type: 'LOAD_SLIDESHOW', payload }),
  UPDATE_ACTIVE_SLIDE: payload  => ({ type: 'UPDATE_ACTIVE_SLIDE', payload }),
  UNMOUNT_SLIDESHOW:         _  => ({ type: 'UNMOUNT_SLIDESHOW' })
}

let subscription$ = null

export const loadSlideshow = id => dispatch => {
  if (subscription$ !== null) {
    subscription$.dispose()
  }

  const projects$ = Observable.from(store.getState().slideshow.projects)
    .filter(x => {
      const match = !id ? 1 : id

      return x.id === parseInt(match)
    })
    .map(x => {
      return {
        project: x,
        id: x.id,
        items: x.images,
        total: x.images.length,
        active: 0
      }
    })
    .map(x => {
      dispatch(actions.LOAD_SLIDESHOW(x))

      return x.total
    })
    .flatMap(x => Observable.interval(4000).take(x).repeat())

    subscription$ = projects$.subscribe(x => dispatch(actions.UPDATE_ACTIVE_SLIDE({ active: x })))
}

export const unmountSlideshow = () => dispatch => {
  if (subscription$ !== null) {
    subscription$.dispose()
    subscription$ = null
  }

  dispatch(actions.UNMOUNT_SLIDESHOW())
}