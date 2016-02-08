import { combineReducers } from 'redux';
import videos from 'sources/videos';

function video(state = {
  total: videos.length - 1,
  playbackRate: 0.6,
  id: null,
  src: null,
  status: null,
  ready: false,
  done: false,
  mounted: false
}, action) {
  switch (action.type) {
    case 'VIDEO_MOUNTED':
      return Object.assign({}, state, {
        status: 'mounted'
      });
    case 'VIDEO_LOADING':
      const nextId = state.id === null || state.id === state.total ? 0 : state.id + 1;
      return Object.assign({}, state, {
        id: nextId,
        src: videos[nextId],
        status: 'loading'
      });
    case 'VIDEO_PLAYING':
      return Object.assign({}, state, {
        status: 'playing',
        ready: true
      });
    case 'VIDEO_ENDED':
      return Object.assign({}, state, {
        status: 'ended'
      });
    case 'VIDEO_UNMOUNTED':
      return Object.assign({}, state, {
        status: 'unmounted'
      });
    case 'VIDEO_TIMEOUT':
      return Object.assign({}, state, {
        status: 'timeout',
        done: true
      });
    case 'VIDEO_ABORTED':
      return Object.assign({}, state, {
        status: 'aborted',
        done: true
      });
    case 'HIDE_SPINNER':
      return Object.assign({}, state, {
        done: true
      });
    default:
      return state;
  }
}

function site(state = { page: null }, action) {
  switch (action.type) {
    case 'PAGE_UPDATE':
      return Object.assign({}, state, {
        page: action.page
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ video, site });

export default rootReducer;