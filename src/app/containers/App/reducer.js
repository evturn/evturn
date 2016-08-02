import { TOGGLE_MENU } from '../../constants'

export default (state={ open: false }, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        open: !state.open
      })

    default:
      return state
  }
}
