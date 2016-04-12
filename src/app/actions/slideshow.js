const actions = {
  loadProject:           payload => ({ type: 'LOAD_SLIDESHOW', payload }),
  carouselPopulated:     images  => ({ type: 'CAROUSEL_POPULATED', images }),
  carouselTransitioning: ()      => ({ type: 'CAROUSEL_TRANSITIONING' }),
  carouselStablized:     ()      => ({ type: 'CAROUSEL_STABLIZED' }),
  carouselUnmounted:     ()      => ({ type: 'CAROUSEL_UNMOUNTED' }),
};

let timeout;
let interval;

export const loadProject = id => dispatch => {
  const projects = store.getState().site.work.web;
  const i = !id ? 0 : id - 1;

  dispatch(actions.loadProject(projects[i]));
};

export const initCarousel = images => dispatch => {
  clearTimers();
  dispatch(actions.carouselPopulated(images));
  interval = setInterval(() => dispatch(actions.carouselTransitioning()), 4000);
};

export const performCleanUp = () => dispatch => {
  clearTimers();
  dispatch(actions.carouselUnmounted());
};

function clearTimers() {
  clearInterval(interval);
  clearTimeout(timeout);
}

function createTimeout() {
  timeout = setTimeout(() => dispatch(actions.carouselStablized()), 1000);
}