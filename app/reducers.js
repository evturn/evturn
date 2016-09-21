import { combineReducers } from 'redux'
import siteReducer from 'containers/Navigation/reducer'
import contentReducer from 'containers/About/reducer'
import videoReducer from 'containers/Home/reducer'
import projectsReducer from 'containers/Web/reducer'

export default combineReducers({
  video: videoReducer,
  site: siteReducer,
  content: contentReducer,
  projects: projectsReducer,
})
