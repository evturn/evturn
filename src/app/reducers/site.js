import { PAGE_TRANSITION, TOGGLE_MENU } from 'actions/site'

export default function site(state = {}, action) {
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