import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import globalReducer from 'containers/App/reducer'
import videoReducer from 'containers/Home/reducer'
import slideshowReducer from 'containers/Projects/reducer'
import { LOCATION_CHANGE } from 'react-router-redux'

function routeReducer(state={
  locationBeforeTransitions: null
}, action) {
  switch (action.type) {

    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        locationBeforeTransitions: action.payload,
      })

    default:
      return state
  }
}

function createReducer() {
  return combineReducers({
    video: videoReducer,
    site: globalReducer,
    slideshow: slideshowReducer,
    routing: routerReducer,
    route: routeReducer
  })
}

export default createReducer
