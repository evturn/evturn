export default function video(state = {
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}, action) {
  switch (action.type) {
    case 'INITIALIZE_PLAYER':
      return Object.assign({}, state, {
        ...action.payload
      })
    case 'MOUNT_VIDEO_PLAYER':
      console.log(action.payload)
      return Object.assign({}, state, {
        ...action.payload
      })
    case 'FADE_LOADING_SCREEN':
      return Object.assign({}, state, {
        ...action.payload
      })
    case 'KILL_LOADING_SCREEN':
      return Object.assign({}, state, {
        ...action.payload
      })
    case 'LOAD_NEXT_VIDEO': {
      return Object.assign({}, state, {
        ...action.payload
      })
    }
    case 'UNMOUNT_VIDEO_PLAYER':
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}