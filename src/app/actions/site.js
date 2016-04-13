const actions = {
  toggleMenu:       () => ({ type: 'TOGGLE_MENU' }),
  pageTransition: page => ({ type: 'PAGE_TRANSITION', page })
};

export const setRouteAsPage = page => dispatch => dispatch(actions.pageTransition(page));
export const toggleMenu = () => dispatch => dispatch(actions.toggleMenu());