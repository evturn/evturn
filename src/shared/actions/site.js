import store from 'shared/store';

const initLocals = (page) => {
  return {
    type: 'INIT_LOCALS',
    page
  };
};

const siteMounted = () => {
  return {
    type: 'SITE_MOUNTED'
  };
};

const pageTransition = page => {
  return {
    type: 'PAGE_TRANSITION',
    page
  };
};

const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  };
};

const dispatch = store.dispatch;

export const init = page => dispatch(initLocals());
export const setRouteAsPage = page => dispatch(pageTransition(page));
export const menuVisibility = () => dispatch(toggleMenu());
export const setSiteMounted = () => dispatch(siteMounted());