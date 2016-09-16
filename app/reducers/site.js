import { combineReducers } from 'redux'
import * as Types from '../constants'

function menuToggle(state=false, action) {
  switch (action.type) {

    case Types.LOCATION_CHANGE:
      return false

    case Types.TOGGLE_MENU:
      return !state

    default:
      return state
  }
}

function sectionsReducer(state=[{
    title: 'Web',
    route: 'work/web',
    icon: 'fa fa-laptop'
  },{
    title: 'Mobile',
    route: 'work/mobile',
    icon: 'fa fa-mobile'
  },{
    title: 'Open Source',
    route: 'work/oss',
    icon: 'fa fa-code-fork'
  }], action) {
  return state
}

function desktopNav(state=[{
    name: 'Projects',
    route: 'work/web'
  },{
    name: 'About',
    route: 'about'
  }], action) {
  return state
}

function mobileNav(state=[{
    name: 'Home',
    route: '/',
  },{
    name: 'Projects',
    route: 'work/web',
    childRoutes: [{
      name: 'Web',
      route: 'work/web',
    },{
      name: 'Mobile',
      route: 'work/mobile',
    },{
      name: 'Open Source',
      route: 'work/oss',
    }]
  },{
    name: 'About',
    route: 'about'
  }], action) {
  return state
}

const navReducer = combineReducers({
  desktop: desktopNav,
  mobile: mobileNav,
})

const siteReducer = combineReducers({
  open: menuToggle,
  sections: sectionsReducer,
  nav: navReducer
})

export default siteReducer
