import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducer from 'containers/App/reducer'
import videoReducer from 'containers/Home/reducer'
import slideshowReducer from 'containers/Projects/reducer'
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

export default combineReducers({
    video: videoReducer,
    site: appReducer,
    slideshow: slideshowReducer,
    routing: routerReducer,
    route: routeReducer
  })
