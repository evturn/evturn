import { Observable } from 'rx'

const MOUNT_VIDEO_PLAYER   = _ => ({ type: 'MOUNT_VIDEO_PLAYER' })
const KILL_LOADING_SCREEN  = _ => ({ type: 'KILL_LOADING_SCREEN' })
const FADE_LOADING_SCREEN  = _ => ({ type: 'FADE_LOADING_SCREEN' })
const LOAD_NEXT_VIDEO      = _ => ({ type: 'LOAD_NEXT_VIDEO' })
const UNMOUNT_VIDEO_PLAYER = _ => ({ type: 'UNMOUNT_VIDEO_PLAYER' })

const killLoadingScreen = () => dispatch => {
  Observable.timer(1000)
    .map(dispatch(FADE_LOADING_SCREEN({ ready: true })))
    .subscribe(_ => dispatch(KILL_LOADING_SCREEN({ done: true })))
}

export const mountVideoPlayer = player => dispatch => {
  if (window.innerWidth < 600) {
    return dispatch(killLoadingScreen())
  }

  dispatch(MOUNT_VIDEO_PLAYER())

  const timer$ = Observable.timer(3000)
  const timeout$ = timer$.subscribe(_ => dispatch(killLoadingScreen()))
  let initialized = false;

  Observable.fromEvent(player, 'playing')
    .subscribe(_ => {
      if (!initialized) {
        timeout$.dispose()
        dispatch(killLoadingScreen())
        initialized = true
      }

      player.playbackRate = 0.6;
    })

  Observable.fromEvent(player, 'ended')
    .subscribe(_ => dispatch(LOAD_NEXT_VIDEO()))
}

export const unmountVideoPlayer = () => dispatch => {
  dispatch(UNMOUNT_VIDEO_PLAYER())
}

export const loadNextVideo = () => dispatch => dispatch(LOAD_NEXT_VIDEO())