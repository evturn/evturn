import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import globalReducer from 'containers/App/reducer'
import videoReducer from 'containers/Home/reducer'
import slideshowReducer from 'containers/Work/reducer'

function createReducer() {
  return combineReducers({
    video: videoReducer,
    site: globalReducer,
    slideshow: slideshowReducer,
    routing: routerReducer
  })
}

export default rootReducer
