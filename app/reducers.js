import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as Types from './constants'
import siteReducer from 'containers/App/reducer'
import contentReducer from 'containers/About/reducer'
import videoReducer from 'containers/Home/reducer'
import projectsReducer from 'containers/Web/reducer'

const routes = [{
    title: 'Home',
    pathname: '/',
  },{
    title: 'Projects',
    pathname: 'work/web',
    childRoutes: [{
      title: 'Web',
      pathname: 'work/web',
    },{
      title: 'Mobile',
      pathname: 'work/mobile',
    },{
      title: 'Open Source',
      pathname: 'work/oss',
    }]
  },{
    title: 'About',
    pathname: 'about'
}]

function routeReducer(state={
  locationBeforeTransitions: null,
  pathname: null,
  notRoot: false,
  routes,
}, action) {

  switch (action.type) {

    case Types.LOCATION_CHANGE:
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
  route: routeReducer,
})
