export default function site(state = {
  page: null,
  pages: [],
  open: false,
  mounted: false
}, action) {
  switch (action.type) {
    case 'INIT_LOCALS':
      return Object.assign({}, state, {
        page: action.page,
        open: state.open
      });
    case 'SITE_MOUNTED':
      return Object.assign({}, state, {
        mounted: true
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