import store from 'store';

const actions = {
  carouselPopulated:     images => ({ type: 'CAROUSEL_POPULATED', images }),
  carouselTransitioning: ()     => ({ type: 'CAROUSEL_TRANSITIONING' }),
  carouselStablized:     ()     => ({ type: 'CAROUSEL_STABLIZED' }),
  carouselUnmounted:     ()     => ({ type: 'CAROUSEL_UNMOUNTED' })
};

const dispatch = store.dispatch;

let interval;
let timeout;
const createInterval = () => interval = setInterval(() => dispatch(actions.carouselTransitioning()), 4000);
const createTimeout = () => timeout = setTimeout(() => dispatch(actions.carouselStablized()), 1000);
const clearTimers = () => {
  clearInterval(interval);
  clearTimeout(timeout);
};

export const initCarousel = images => dispatch => {
  clearTimers();
  dispatch(actions.carouselPopulated(images));
  createInterval();
};

export const performCleanUp = () => {
  clearTimers();
  dispatch(actions.carouselUnmounted());
};