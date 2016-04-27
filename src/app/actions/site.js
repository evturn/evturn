const actions = {
  TOGGLE_MENU:           _ => ({ type: 'TOGGLE_MENU' }),
  PAGE_TRANSITION: payload => ({ type: 'PAGE_TRANSITION', payload })
};

export const pageTransition = props => dispatch => dispatch(actions.PAGE_TRANSITION(props));
export const toggleMenu = _ => dispatch => dispatch(actions.TOGGLE_MENU());