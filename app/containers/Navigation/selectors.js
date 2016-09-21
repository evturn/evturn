export const selectLoadingState = (state, pathname) => {
  return pathname === '/' && !state.video.initialized && !state.video.ready
}

export function selectRouteTitle(state, pathname) {

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
