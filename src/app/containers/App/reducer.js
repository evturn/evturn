import {
  TOGGLE_MENU,
  CHANGE_HEX
} from './constants'

function appReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_HEX:
      return Object.assign({}, state, {
        hex: action.payload.hex ? '#212121' : '#ffffff'
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
