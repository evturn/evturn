export default function carousel(state= {
  images: [],
  total: null,
  index: null,
  nextIndex: null,
  active: null,
  previous: null,
  enter: null,
  leave: null
}, action) {
  switch (action.type) {
    case 'CAROUSEL_POPULATED':
      return Object.assign({}, state, {
        images: action.images,
        total: action.images.length - 1,
        index: 0,
        nextIndex: 1,
        active: action.images[0]
      });
    case 'CAROUSEL_TRANSITIONING':
      let newIndex;
      let newNextIndex;

      if (state.nextIndex < state.total && state.index !== state.total) {
        newIndex = state.index + 1;
        newNextIndex = state.nextIndex + 1;
      } else if (state.nextIndex === state.total) {
        newIndex = state.index + 1;
        newNextIndex = 0;
      } else if (state.nextIndex === 0) {
        newIndex = 0;
        newNextIndex = 1;
      }
      return Object.assign({}, state, {
        previous: state.previous,
        index: newIndex,
        nextIndex: newNextIndex,
        enter: state.images[newIndex],
        leave: state.previous,
        active: null
      });
    case 'CAROUSEL_STABLIZED':
      return Object.assign({}, state, {
        previous: state.images[state.index],
        active: state.images[state.index],
        enter: null,
        leave: null
      });
    case 'CAROUSEL_UNMOUNTED':
      return Object.assign({}, state, {
        images: [],
        total: null,
        index: null,
        nextIndex: null,
        active: null,
        previous: null,
        enter: null,
        leave: null
      });
    default:
      return state;
  }
}