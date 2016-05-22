import {
  TOGGLE_MENU,
  PAGE_TRANSITION
} from './constants'

function appReducer(state = {}, action) {
  switch (action.type) {
    case PAGE_TRANSITION:
      return Object.assign({}, state, {
        ...action.payload
      })
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        open: !state.open
      })
    default:
      return state
  }
}

export default appReducer
