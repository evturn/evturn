import {
  MOUNT_VIDEO_PLAYER,
  INITIALIZE_PLAYER,
  KILL_LOADING_SCREEN ,
  FADE_LOADING_SCREEN,
  LOAD_NEXT_VIDEO,
  UNMOUNT_VIDEO_PLAYER,
  ADJUST_PLAYBACK_RATE,
  BAIL_ON_INITIALIZE
} from './constants'

const initialState = {
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_PLAYER:
    case MOUNT_VIDEO_PLAYER:
    case FADE_LOADING_SCREEN:
    case KILL_LOADING_SCREEN:
    case LOAD_NEXT_VIDEO:
    case UNMOUNT_VIDEO_PLAYER:
      return Object.assign({}, state, {
        ...action.payload
      })
    case BAIL_ON_INITIALIZE:
      return Object.assign({}, state, {
        ...action.payload
      })
    case ADJUST_PLAYBACK_RATE:
    default:
      return state
  }
}

export default videoReducer
