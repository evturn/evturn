import * as Types from '../../constants'

export default function webProjectsReducer(state={
  items: [],
  slug: 'drive',
  slide: 0,
}, action) {
  switch (action.type) {
    case Types.MOUNT_CAROUSEL:
      return Object.assign({}, state, {
        slide: 0,
        slug: action.payload.slug,
      })

    case Types.NEXT_SLIDE:
      return Object.assign({}, state, {
        slide: action.payload.slide,
      })

    case Types.UNMOUNT_CAROUSEL:
      return Object.assign({}, state, {
        slide: null
      })

    default:
      return state
  }
}
