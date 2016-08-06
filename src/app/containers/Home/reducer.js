import {
  MOUNT_VIDEO,
  MOUNT_SUCCESS,
  MOUNT_ERROR,
  ABORT_MOUNT,
  PLAY_NEXT,
  UNMOUNT_VIDEO,
  FADE_LOADER,
  HIDE_LOADER,
} from '../../constants'

const initialState = {
  playlist: [],
  initialized: false,
  ready: false,
  done: false,
  id: 0,
}

export default (state=initialState, action) => {
  switch (action.type) {
    case MOUNT_VIDEO:
      const playlist = sortVideos(state.items)
      return Object.assign({}, state, {
        playlist,
        src: playlist[0],
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

function sortVideos(videos) {
  const firstHalf = videos.slice(0, 5)
  const secondHalf = videos.slice(6, videos.length)

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

  return shuffle(firstHalf, [ videos[0] ]).concat(shuffle(secondHalf, []))
}
