import store from 'store';

const dispatch = store.dispatch;
const getState = store.getState;

const siteMounted = (featuredTech) => {
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

export const setRouteAsPage = page => dispatch(pageTransition(page));
export const menuVisibility = () => dispatch(toggleMenu());
export const setSiteMounted = () => dispatch(siteMounted());