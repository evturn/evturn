import { combineReducers } from 'redux'
import * as Types from '../constants'

function carouselReducer(state={
  items: [],
  slug: 'drive',
  slide: 0,
}, action) {
  switch (action.type) {

    case Types.MOUNT_CAROUSEL:
      return Object.assign({}, state, {
        slide: 0,
        slug: action.payload.slug,
      })

    case Types.NEXT_SLIDE:
      return Object.assign({}, state, {
        slide: action.payload.slide,
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
  return state.projects.web.items
    .filter(x => x.slug === state.projects.web.slug)
    .map(project => ({
      ...project,
      tech: project.tech
        .map(x => state.content.tech.filter(y => y.slug === x)[0])
    }))[0]
}


