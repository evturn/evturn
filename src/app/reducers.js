import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducer from 'containers/App/reducer'
import videoReducer from 'containers/Home/reducer'
import webProjectsReducer from 'containers/Projects/reducer'
import { LOCATION_CHANGE } from 'react-router-redux'

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

const ossReducer = (state=[]) => state
const iosReducer = (state=[]) => state
const techReducer = (state=[]) => state

const projectsReducer = combineReducers({
  web: webProjectsReducer,
  oss: ossReducer,
  ios: iosReducer,
})

export default combineReducers({
    video: videoReducer,
    site: appReducer,
    tech: techReducer,
    projects: projectsReducer,
    routing: routerReducer,
    route: routeReducer
  })
