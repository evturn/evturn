import {
  TOGGLE_MENU,
} from './constants'

const appReducer = (state={}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        open: !state.open
      })

    default:
      return state
  }
}

export default appReducer
