export default function site(state = {
  page: null
}, action) {
  switch (action.type) {
    case 'PAGE_UPDATE':
      return Object.assign({}, state, {
        page: action.page
      });
    default:
      return state;
  }
}