export default function slideshow(state = {}, action) {
  switch (action.type) {
    case 'LOAD_SLIDESHOW': {
      const current = state.projects[action.id];

      return Object.assign({}, state, {
        project: current,
        slides: {
          items: current.images,
          total: current.images.length -1,
          active: 0
        }
      });
    }
    case 'UPDATE_ACTIVE_SLIDE':
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

