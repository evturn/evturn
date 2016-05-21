import {
   MOUNT_VIDEO_PLAYER, INITIALIZE_PLAYER, KILL_LOADING_SCREEN,
   FADE_LOADING_SCREEN, LOAD_NEXT_VIDEO, UNMOUNT_VIDEO_PLAYER,
   ADJUST_PLAYBACK_RATE
} from 'actions/video'

export default function video(state = {
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}, action) {
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

    case ADJUST_PLAYBACK_RATE:
    default:
      return state
  }
}