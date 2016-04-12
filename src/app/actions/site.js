const actions = {
  siteMounted:      () => ({ type: 'SITE_MOUNTED' }),
  toggleMenu:       () => ({ type: 'TOGGLE_MENU' }),
  pageTransition: page => ({ type: 'PAGE_TRANSITION', page })
};

export const setRouteAsPage = page => dispatch => dispatch(actions.pageTransition(page));
export const menuVisibility = () => dispatch => dispatch(actions.toggleMenu());
export const setSiteMounted = () => dispatch => dispatch(actions.siteMounted());