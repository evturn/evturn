import { combineReducers } from 'redux'
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'

import siteReducer from './site'
import contentReducer from './content'
import videoReducer from './video'
import projectsReducer from './projects'

function routeReducer(state={
  locationBeforeTransitions: null,
  pathname: null,
  notRoot: false,
}, action) {
  switch (action.type) {

    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        locationBeforeTransitions: action.payload,
        pathname: action.payload.pathname,
        notRoot: action.payload.pathname.length > 1,
      })

    default:
      return state
  }
}

export default combineReducers({
  video: videoReducer,
  site: siteReducer,
  content: contentReducer,
  projects: projectsReducer,
  routing: routerReducer,
  route: routeReducer
})
