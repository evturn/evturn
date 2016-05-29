import {
  TOGGLE_MENU,
  MOBILE_SITE
} from './constants'

function appReducer(state = {}, action) {
  switch (action.type) {

    case TOGGLE_MENU:
      return Object.assign({}, state, {
        open: !state.open
      })

    case MOBILE_SITE:
      return Object.assign({}, state, {
        mobile: true
      })

    default:
      return state
  }
}

export default appReducer
