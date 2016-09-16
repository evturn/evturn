import * as Types from '../constants'

function routeReducer(state={
  locationBeforeTransitions: null,
  pathname: null,
  notRoot: false,
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

export default routeReducer
