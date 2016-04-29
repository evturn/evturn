import { Observable } from 'rx'
import { dispatch, getState } from 'store'

const MOUNT_VIDEO_PLAYER   = payload => ({ type: 'MOUNT_VIDEO_PLAYER',   payload })
const INITIALIZE_PLAYER    = payload => ({ type: 'INITIALIZE_PLAYER',    payload })
const KILL_LOADING_SCREEN  = payload => ({ type: 'KILL_LOADING_SCREEN',  payload })
const FADE_LOADING_SCREEN  = payload => ({ type: 'FADE_LOADING_SCREEN',  payload })
const LOAD_NEXT_VIDEO      = payload => ({ type: 'LOAD_NEXT_VIDEO',      payload })
const UNMOUNT_VIDEO_PLAYER = payload => ({ type: 'UNMOUNT_VIDEO_PLAYER', payload })

const removeLoadingScreen = _ => {
  Observable.timer(800)
    .map(dispatch(FADE_LOADING_SCREEN({ ready: true })))
    .subscribe(_ => dispatch(KILL_LOADING_SCREEN({ done: true })))
}

const listenForFirstPlayback = player => {
  const timer$ = Observable.timer(3000)
  const timeout$ = timer$.subscribe(_ => removeLoadingScreen())

  return _ => {
    if (!getState().video.initialized) {
      timeout$.dispose()
      removeLoadingScreen()
      dispatch(INITIALIZE_PLAYER({ initialized: true }))
    }

    player.playbackRate = 0.6
  }
}

export const mountPlayer = player => {
  if (window.innerWidth < 600) {
    return removeLoadingScreen()
  }

  const videos = getState().video.playlist
  const playbackObserver = listenForFirstPlayback(player)

  Observable.from(videos)
    .filter((_, i) => i === 0)
    .map(x => ({ src: x, id: 0 }))
    .subscribe(x => dispatch(MOUNT_VIDEO_PLAYER(x)))

  Observable.fromEvent(player, 'playing')
    .subscribe(playbackObserver)

  Observable.fromEvent(player, 'ended')
    .map(x => getState().video.id)
    .map(id => id === videos.length - 1 ? 0 : id + 1)
    .subscribe(x => dispatch(LOAD_NEXT_VIDEO({ src: videos[x], id: x })))
}

export const unmountPlayer = _ => {
  dispatch(UNMOUNT_VIDEO_PLAYER({ src: null, id: 0 }))
}