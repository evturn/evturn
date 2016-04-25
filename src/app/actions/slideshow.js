import { Observable } from 'rx'

const actions = {
  LOAD_SLIDESHOW:       id  => ({ type: 'LOAD_SLIDESHOW', id }),
  UPDATE_ACTIVE_SLIDE: idx  => ({ type: 'UPDATE_ACTIVE_SLIDE', active: idx }),
  UNMOUNT_SLIDESHOW:     _  => ({ type: 'UNMOUNT_SLIDESHOW' })
}

let subscription$ = null

export const loadSlideshow = id => dispatch => {
  if (subscription$ !== null) {
    subscription$.dispose()
  }
  const $id = Observable.from(!id ? [0] : [id - 1])
    .subscribe(x => dispatch(actions.LOAD_SLIDESHOW(x)))
}

export const startPresentation = ({ total }) => dispatch => {
  const interval$ = Observable.interval(4000)
    .take(total)
    .repeat()

  subscription$ = interval$.subscribe(x => dispatch(actions.UPDATE_ACTIVE_SLIDE(x)))
}

export const unmountSlideshow = () => dispatch => {
  if (subscription$ !== null) {
    subscription$.dispose()
    subscription$ = null
  }

  dispatch(actions.UNMOUNT_SLIDESHOW())
}