import * as Types from '../../constants'

export default function videoReducer (state={
  items: [],
  fallback: '',
  playlist: [],
  initialized: false,
  ready: false,
  done: false,
  id: 0,
  playing: false,
}, action) {
  switch (action.type) {

    case Types.SHUFFLE_VIDEOS:
      const playlist = action.payload.playlist
      return Object.assign({}, state, {
        playlist,
        src: playlist[0],
        id: 0,
      })

    case Types.VIDEO_PLAYING:
      return Object.assign({}, state, {
        playing: true,
      })

    case Types.ABORT_MOUNT:
      return Object.assign({}, state, {
        ready: true,
      })

    case Types.FADE_LOADER:
      return Object.assign({}, state, {
        ready: true,
      })

    case Types.HIDE_LOADER:
      return Object.assign({}, state, {
        initialized: true,
        done: true,
      })

    case Types.PLAY_NEXT:
      const index = state.id + 1 === state.playlist.length
        ? 0
        : state.id + 1
      return Object.assign({}, state, {
        ready: false,
        done: false,
        src: state.playlist[index],
        id: index,
      })

    case Types.UNMOUNT_VIDEO:
      return Object.assign({}, state, {
        src: null,
        id: 0,
        initialized: false,
        ready: false,
        done: false,
        playing: false,
      })

    default:
      return state
  }
}
