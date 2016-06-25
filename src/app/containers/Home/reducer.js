import {
  INITIALIZE_PLAYER,
  INITIALIZE_PLAYER_SUCCESS,
  INITIALIZE_PLAYER_ABORT,
  FADE_LOADING_INDICATOR,
  REMOVE_LOADING_INDICATOR,
  PLAY_NEXT_IN_QUEUE,
  UNMOUNT_PLAYER,
} from './constants'

const initialState = {
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}

const videoReducer = (state=initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PLAYER:
      return Object.assign({}, state, {
        src: state.playlist[0],
        id: 0,
      })

    case INITIALIZE_PLAYER_SUCCESS:
      return Object.assign({}, state, {
        initialized: true,
      })

    case INITIALIZE_PLAYER_ABORT:
      return Object.assign({}, state, {
        mobile: true,
        initialized: true,
        ready: true,
      })

    case FADE_LOADING_INDICATOR:
      return Object.assign({}, state, {
        ready: true,
      })

    case REMOVE_LOADING_INDICATOR:
      return Object.assign({}, state, {
        done: true,
      })

    case PLAY_NEXT_IN_QUEUE:
      return Object.assign({}, state, {
        ready: false,
        done: false,
        src: action.src,
        id: action.id,
      })

    case UNMOUNT_PLAYER:
      return Object.assign({}, state, {
        src: null,
        id: 0,
        mobile: false,
      })

    default:
      return state
  }
}

export default videoReducer
