export default function video(state = {
  ready: false,
  done: false,
  playing: false,
  loading: false,
  mounted: false
}, action) {
  switch (action.type) {
    case 'VIDEO_MOUNTED':
      return Object.assign({}, state, {
        mounted: true
      });
    case 'VIDEO_LOADING':
      const nextId = state.id === undefined || state.id === state.total ? 0 : state.id + 1;
      return Object.assign({}, state, {
        id: nextId,
        src: state.playlist[nextId],
        loading: true
      });
    case 'VIDEO_PLAYING':
      return Object.assign({}, state, {
        ready: true,
        loading: false,
        playing: true
      });
    case 'VIDEO_ENDED':
      return Object.assign({}, state, {
        playing: false
      });
    case 'VIDEO_UNMOUNTED':
      return Object.assign({}, state, {
        id: undefined,
        src: null,
        mounted: false,
        loading: false,
        playing: false
      });
    case 'VIDEO_TIMEOUT':
      return Object.assign({}, state, {
        done: true,
        loading: false
      });
    case 'VIDEO_ABORTED':
      return Object.assign({}, state, {
        done: true,
        loading: false
      });
    case 'HIDE_SPINNER':
      return Object.assign({}, state, {
        done: true
      });
    case 'VIDEO_NEXT':
      const skipToId = state.id === null || state.id === state.total ? 0 : state.id + 1;
      return Object.assign({}, state, {
        id: skipToId,
        src: state.playlist[skipToId],
        loading: true,
        playing: false
      });
    default:
      return state;
  }
}