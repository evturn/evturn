export default function slideshow(state = {}, action) {
  switch (action.type) {
    case 'LOAD_PRESENTATION': {
      const current = state.presentations[action.id];

      return Object.assign({}, state, {
        currentPresentation: current,
        slides: {
          items: current.images,
          total: current.images.length -1,
          active: 0
        }
      });
    }
    case 'TRANSITION_NEXT':
      return Object.assign({}, state, {
        slides: {
          ...state.slides,
          active: action.active
        }
      });
    case 'UNMOUNT_SLIDESHOW':
      return Object.assign({}, state, {
        slides: {
          ...state.slides,
          active: 0
        }
      });
    default:
      return state;
  }
}

