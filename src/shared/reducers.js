import { combineReducers } from 'redux';
import videos from 'sources/videos';

function carousel(state= {
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

function project(state = {
  thumbnails: [],
  slides: [],
  tech: [],
  total: null,
  name: null,
  description: null,
  id: null,
  links: null,
  mounted: false
}, action) {
  switch (action.type) {
    case 'PROJECT_LOADED':
      return Object.assign({}, state, {
        tech: action.tech,
        slides: action.slides,
        name: action.name,
        description: action.description,
        id: action.id,
        links: action.links,
        thumbnails: action.thumbnails,
        mounted: true
      });
    default:
      return state;
  }
}

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
        status: 'unmounted',
        id: null,
        src: null,
        mounted: false
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
    case 'VIDEO_NEXT':
      const skipToId = state.id === null || state.id === state.total ? 0 : state.id + 1;
      return Object.assign({}, state, {
        id: skipToId,
        src: videos[skipToId]
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

const rootReducer = combineReducers({ video, site, project, carousel });

export default rootReducer;