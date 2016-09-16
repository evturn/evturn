import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import siteReducer from './site'
import contentReducer from './content'
import videoReducer from './video'
import projectsReducer from './projects'
import routeReducer from './route'

export default combineReducers({
  video: videoReducer,
  site: siteReducer,
  content: contentReducer,
  projects: projectsReducer,
  routing: routerReducer,
  route: routeReducer
})
