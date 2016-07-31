import {
  MOUNT_VIDEO,
  MOUNT_SUCCESS,
  MOUNT_ERROR,
  ABORT_MOUNT,
  PLAY_NEXT,
  UNMOUNT_VIDEO,
  FADE_LOADER,
  HIDE_LOADER,
} from './constants'

const initialState = {
  playlist: [],
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}

const videoReducer = (state=initialState, action) => {
  switch (action.type) {
    case MOUNT_VIDEO:
      return Object.assign({}, state, {
        src: state.playlist[0],
        id: 0,
      })

    case ABORT_MOUNT:
      return Object.assign({}, state, {
        initialized: true,
        ready: true,
      })

    case FADE_LOADER:
      return Object.assign({}, state, {
        ready: true,
      })

    case HIDE_LOADER:
      return Object.assign({}, state, {
        initialized: true,
        done: true,
      })

    case PLAY_NEXT:
      const index = state.id + 1 === state.playlist.length
        ? 0
        : state.id + 1
      return Object.assign({}, state, {
        ready: false,
        done: false,
        src: state.playlist[index],
        id: index,
      })

    case UNMOUNT_VIDEO:
      return Object.assign({}, state, {
        src: null,
        id: 0,
        initialized: false,
        ready: false,
        done: false,
      })

    default:
      return state
  }
}

export default videoReducer
