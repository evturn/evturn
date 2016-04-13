const actions = {
  loadPresentation: id      => ({ type: 'LOAD_PRESENTATION', id }),
  transitionNext:   active  => ({ type: 'TRANSITION_NEXT', active }),
  unmountSlideshow: ()      => ({ type: 'UNMOUNT_SLIDESHOW' }),
};

export const loadPresentation = id => dispatch => {
  const presentationId = !id ? 0 : id - 1;

  dispatch(actions.loadPresentation(presentationId));
};

const carousel = {
  interval: null,
  timeout: null,
  clear() { clearInterval(this.interval) }
};

export const unmountSlideshow = () => dispatch => {
  carousel.clear();
  dispatch(actions.unmountSlideshow());
};

export const startPresentation = slides => dispatch => {
  const { items, total } = slides;
  let count = 0;

  carousel.clear();
  carousel.interval = setInterval(() => {
    count = count === total ? 0 : count + 1;
    dispatch(actions.transitionNext(count));
  }, 4000);
};