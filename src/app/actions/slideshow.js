import { Observable } from 'rx'

const actions = {
  LOAD_PRESENTATION: id      => ({ type: 'LOAD_PRESENTATION', id }),
  TRANSITION_NEXT:   active  => ({ type: 'TRANSITION_NEXT', active }),
  UNMOUNT_SLIDESHOW: ()      => ({ type: 'UNMOUNT_SLIDESHOW' }),
}

export const loadPresentation = id => dispatch => {
  const $id = Observable.from(id)
    .map(id => !id ? 0 : id - 1)
    .subscribe(x => dispatch(actions.LOAD_PRESENTATION(x)))
}

const carousel = {
  interval: null,
  timeout: null,
  clear() { clearInterval(this.interval) }
}

export const unmountSlideshow = () => dispatch => {
  carousel.clear()
  dispatch(actions.UNMOUNT_SLIDESHOW())
}

export const startPresentation = slides => dispatch => {
  const { items, total } = slides
  let count = 0

  carousel.clear()
  carousel.interval = setInterval(() => {
    count = count === total ? 0 : count + 1
    dispatch(actions.TRANSITION_NEXT(count))
  }, 4000)
}