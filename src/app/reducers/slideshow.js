export default function slideshow(state = {}, action) {
  switch (action.type) {
    case 'LOAD_SLIDESHOW': {
      return Object.assign({}, state, {
        ...action.payload,
        active: 0
      });
    }
    case 'UPDATE_ACTIVE_SLIDE':
      return Object.assign({}, state, {
        ...action.payload
      });
    case 'UNMOUNT_SLIDESHOW':
      return Object.assign({}, state, {
        active: 0
      });
    default:
      return state;
  }
}