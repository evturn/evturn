import * as Types from '../constants'

function videoReducer (state={
  items: [],
  playlist: [],
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}, action) {
  switch (action.type) {

    case Types.SHUFFLE_VIDEOS:
      const playlist = action.payload.playlist
      return Object.assign({}, state, {
        playlist,
        src: playlist[0],
        id: 0,
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
      })

    default:
      return state
  }
}

export default videoReducer

export const sortVideos = items => {
  const firstHalf = shuffle(items.slice(0, 5), [ items[0] ])
  const secondHalf = shuffle(items.slice(6, items.length), [])
  return firstHalf.concat(secondHalf)
}

function shuffle(items, acc) {
  if (acc.length === items.length) {
    return acc
  }
  const randomSelection = items[Math.floor(Math.random() * items.length)]

  if (!acc.includes(randomSelection)) {
    acc.push(randomSelection)
  }
  return shuffle(items, acc)
}
