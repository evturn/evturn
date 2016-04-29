import { Observable } from 'rx'
import { dispatch, getState } from 'store'

const LOAD_SLIDESHOW      = payload  => ({ type: 'LOAD_SLIDESHOW', payload })
const UPDATE_ACTIVE_SLIDE = payload  => ({ type: 'UPDATE_ACTIVE_SLIDE', payload })
const UNMOUNT_SLIDESHOW   =       _  => ({ type: 'UNMOUNT_SLIDESHOW' })

const loadProjectToCarousel = x => {
  dispatch(LOAD_SLIDESHOW({
    project: x,
    id: x.id,
    images: x.images.map((x, i) => {
      x.active = i === 0
      return x
    })
  }))

  return x
}

const setIntervalOnCarousel = x => {
  return Observable.interval(4000)
    .take(x.images.length)
    .repeat()
    .map(interval => {
      return x.images.map((image, i) => {
        image.active = interval === i
        return image
      })
    })
}

export const createSlideshow = id => {
  const pid = !isNaN(parseInt(id)) ? parseInt(id) : 1
  const projects$ = Observable.from(getState().slideshow.projects)
  const project$ = projects$
    .filter(x => x.id === pid)
    .map(loadProjectToCarousel)
    .flatMap(setIntervalOnCarousel)

  return project$.subscribe(x => dispatch(UPDATE_ACTIVE_SLIDE({ images: x })))
}

export const tearDownCarousel = subscription$ => {
  subscription$.dispose()
  dispatch(UNMOUNT_SLIDESHOW())
}