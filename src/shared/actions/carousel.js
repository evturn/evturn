import store from 'store';

const carouselPopulated = (images) => {
  return {
    type: 'CAROUSEL_POPULATED',
    images
  }
};

const carouselTransitioning = () => { return { type: 'CAROUSEL_TRANSITIONING' } };
const carouselStablized     = () => { return { type: 'CAROUSEL_STABLIZED' } };
const carouselUnmounted     = () => { return { type: 'CAROUSEL_UNMOUNTED' } };

const dispatch = store.dispatch;

let interval;
let timeout;
const createInterval = () => interval = setInterval(() => dispatch(carouselTransitioning()), 4000);
const createTimeout = () => timeout = setTimeout(() => dispatch(carouselStablized()), 1000);
const clearTimers = () => {
  clearInterval(interval);
  clearTimeout(timeout);
};

export const init = (images) => {
  clearTimers();
  dispatch(carouselPopulated(images));
  createInterval();
};

export const performCleanUp = () => {
  clearTimers();
  dispatch(carouselUnmounted());
};