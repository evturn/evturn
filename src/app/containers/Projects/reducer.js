import {
  LOAD_SLIDESHOW,
  UPDATE_ACTIVE_SLIDE,
  TEAR_DOWN_CAROUSEL
} from './constants'

function slideshowReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_SLIDESHOW:
      return Object.assign({}, state, {
        ...action.payload,
        active: 0
      })
    case UPDATE_ACTIVE_SLIDE:
      return Object.assign({}, state, {
        ...action.payload
      })
    case TEAR_DOWN_CAROUSEL:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}

export default slideshowReducer
