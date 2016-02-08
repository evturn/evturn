export default function site(state = {
  page: null,
  pages: [],
  open: false
}, action) {
  switch (action.type) {
    case 'INIT_LOCALS':
      return Object.assign({}, state, {
        page: action.page,
        pages: action.pages,
        open: state.open
      });
    case 'PAGE_TRANSITION':
      return Object.assign({}, state, {
        page: action.page
      });
    case 'TOGGLE_MENU':
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}