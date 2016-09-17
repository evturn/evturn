import * as Types from '../constants'

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
        title: getRouteTitle(state, action.payload.pathname),
      })

    default:
      return state
  }
}

function getRouteTitle(state, pathname) {

  function matchRoute(route, acc) {
    if (route.childRoutes) {
      const match = route.childRoutes
        .filter(x => matchRoute(x, acc))[0]
      if (match) {
        acc += match.title
        return acc
      }
    }

    if (!route.pathname.startsWith('/')) {
      route.pathname = '/' + route.pathname
    }

    if (route.pathname === pathname) {
      acc += route.title
      return acc
    }
  }

  return state.routes.reduce((acc, x) => {
    const result = matchRoute(x, acc)
    if (result) {
      acc += result
    }
    return acc
  }, '')
}

export default routeReducer

export const selectRouteByTitle = (state, title) => {
  return state.route.routes.filter(x => {
      if (x.title === title) {
        return x
      }
      if (x.childRoutes) {
        return x.childRoutes.filter(y => y.title === title)[0]
      }
    })
    .map(x => x.pathname)[0]
}



