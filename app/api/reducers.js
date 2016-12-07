import { combineReducers } from 'redux'

function videoReducer (state={
  items: [],
  fallback: '',
  playlist: [],
  initialized: false,
  ready: false,
  done: false,
  id: 0,
  playing: false,
}, action) {
  switch (action.type) {

    case 'SHUFFLE_VIDEOS':
      const playlist = action.payload.playlist
      return Object.assign({}, state, {
        playlist,
        src: playlist[0],
        id: 0,
      })

    case 'VIDEO_PLAYING':
      return Object.assign({}, state, {
        playing: true,
      })

    case 'ABORT_MOUNT':
      return Object.assign({}, state, {
        ready: true,
      })

    case 'FADE_LOADER':
      return Object.assign({}, state, {
        ready: true,
      })

    case 'HIDE_LOADER':
      return Object.assign({}, state, {
        initialized: true,
        done: true,
      })

    case 'PLAY_NEXT':
      const index = state.id + 1 === state.playlist.length - 1
        ? 0
        : state.id + 1
      return Object.assign({}, state, {
        ready: false,
        done: false,
        src: state.playlist[index],
        id: index,
      })

    case 'UNMOUNT_VIDEO':
      return Object.assign({}, state, {
        src: null,
        id: 0,
        initialized: false,
        ready: false,
        done: false,
        playing: false,
      })

    default:
      return state
  }
}

function menuToggle(state=false, action) {
  switch (action.type) {

    case 'LOCATION_CHANGE':
      return false

    case 'TOGGLE_MENU':
      return !state

    default:
      return state
  }
}

function sectionsReducer(state=[{
    title: 'Web',
    route: 'work/web',
    icon: 'fa fa-laptop'
  },{
    title: 'Mobile',
    route: 'work/mobile',
    icon: 'fa fa-mobile'
  },{
    title: 'Open Source',
    route: 'work/oss',
    icon: 'fa fa-code-fork'
  }], action) {
  return state
}

function desktopNav(state=[{
    name: 'Projects',
    route: 'work/web'
  },{
    name: 'About',
    route: 'about'
  }], action) {
  return state
}

function mobileNav(state=[{
    name: 'Home',
    route: '/',
  },{
    name: 'Projects',
    route: 'work/web',
    childRoutes: [{
      name: 'Web',
      route: 'work/web',
    },{
      name: 'Mobile',
      route: 'work/mobile',
    },{
      name: 'Open Source',
      route: 'work/oss',
    }]
  },{
    name: 'About',
    route: 'about'
  }], action) {
  return state
}

function carouselReducer(state={
  project: {},
  items: [],
  slug: 'drive',
  slide: 0,
}, action) {
  switch (action.type) {

    case 'SELECT_PROJECT':
      return Object.assign({}, state, {
        slide: 0,
        slug: action.payload.slug,
        project: action.payload.project,
      })

    case 'NEXT_SLIDE':
      return Object.assign({}, state, {
        slide: state.slide === state.project.images.length - 1 ? 0 : state.slide + 1,
      })

    case 'UNMOUNT_CAROUSEL':
      return Object.assign({}, state, {
        slide: null
      })

    default:
      return state
  }
}

function projectsPlatformReducer(state={
  items: []
}, action) {
  return state
}

const selectTech = state => {
  return state.tools.reduce((acc, x) => {
    return state.tech
      .filter(y => x === y.slug)
      .concat(acc)
  }, [])
}

function contentReducer(state={
    tech: [],
    tools: [],
    copy: '',
    contact: [],
  }, action) {

  if (state.tech.length) {
    return {
      ...state,
      tools: selectTech(state)
    }
  } else {
    return state
  }
}

const siteReducer = combineReducers({
  open: menuToggle,
  sections: sectionsReducer,
  nav: combineReducers({
    desktop: desktopNav,
    mobile: mobileNav,
  })
})

const projectsReducer = combineReducers({
  web: carouselReducer,
  oss: projectsPlatformReducer,
  ios: projectsPlatformReducer,
})

export default combineReducers({
  video: videoReducer,
  site: siteReducer,
  content: contentReducer,
  projects: projectsReducer,
})
