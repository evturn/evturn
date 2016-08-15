import { combineReducers } from 'redux'
import * as Types from '../constants'

function carouselReducer(state={
  items: [],
  project: {},
  slug: 'drive',
  slide: 0,
}, action) {
  switch (action.type) {

    case Types.SELECT_PROJECT:
      return Object.assign({}, state, {
        slide: 0,
        slug: action.payload.slug,
        project: action.payload.project,
      })

    case Types.NEXT_SLIDE:
      return Object.assign({}, state, {
        slide: state.slide === state.project.images.length - 1 ? 0 : state.slide + 1,
      })

    case Types.UNMOUNT_CAROUSEL:
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

const projectsReducer = combineReducers({
  web: carouselReducer,
  oss: projectsPlatformReducer,
  ios: projectsPlatformReducer,
})

export default projectsReducer

export const selectProject = state => {
  return state.items
    .filter(x => x.slug === state.slug)
    .map(project => ({
      ...project,
      tech: project.tech
        .map(x => state.tech.filter(y => y.slug === x)[0])
    }))[0]
}


