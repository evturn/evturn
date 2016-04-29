export default function site(state = {}, action) {
  switch (action.type) {
    case 'PAGE_TRANSITION':
      return Object.assign({}, state, {
        ...action.payload
      })
    case 'TOGGLE_MENU':
      return Object.assign({}, state, {
        open: !state.open
      })
    default:
      return state
  }
}