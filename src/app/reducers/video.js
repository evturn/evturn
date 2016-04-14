export default function video(state = {
  ready: false,
  done: false
}, action) {
  switch (action.type) {
    case 'MOUNT_VIDEO_PLAYER':
      return Object.assign({}, state, {
        total: state.playlist.length - 1,
        id: 0,
        src: state.playlist[0]
      });
    case 'FADE_LOADING_SCREEN':
      return Object.assign({}, state, {
        ready: true
      });
    case 'KILL_LOADING_SCREEN':
      return Object.assign({}, state, {
        done: true
      });
    case 'LOAD_NEXT_VIDEO': {
      const id = state.id === state.total ? 0 : state.id + 1;

      return Object.assign({}, state, {
        id,
        src: state.playlist[id]
      });
    }
    case 'UNMOUNT_VIDEO_PLAYER':
      return Object.assign({}, state, {
        id: 0,
        src: null
      });
    default:
      return state;
  }
}