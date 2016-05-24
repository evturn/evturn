import * as Rx from 'rxjs'

import {
  MOUNT_VIDEO_PLAYER,
  INITIALIZE_PLAYER,
  KILL_LOADING_SCREEN ,
  FADE_LOADING_SCREEN,
  LOAD_NEXT_VIDEO,
  UNMOUNT_VIDEO_PLAYER,
  ADJUST_PLAYBACK_RATE
} from './constants'

const beginFade = _ => (
  Rx.Observable.of({ ready: true })
    .map(payload => ({ type: FADE_LOADING_SCREEN, payload }))
)
const completeFadeWithTime = duration => (
  Rx.Observable.timer(duration)
    .map(_ => ({ done: true }))
    .map(payload => ({ type: KILL_LOADING_SCREEN, payload  }))
)

const initializePlayer = _ => (
  Rx.Observable.of({ initialized: true })
    .map(payload => ({ type: INITIALIZE_PLAYER, payload }))
)

const timeoutWithAbort = duration => actions => (
  Rx.Observable.timer(duration)
    .flatMap(beginFade)
    .takeUntil(actions.ofType(INITIALIZE_PLAYER))
)

export const mountPlayer = player => (
  (actions, store) => {
    const bailOnInitialize$ = Rx.Observable.merge(
      completeFadeWithTime(800),
      beginFade()
    )

    if (window.innerWidth <= 1024) {
      return bailOnInitialize$
    }

    store.dispatch(timeoutWithAbort(3000))

    const playlist = store.getState().video.playlist

    const start$ = Rx.Observable.from(playlist)
      .filter((_, i) => i === 0)
      .map(x => ({ src: x, id: 0 }))
      .map(payload => ({ type: MOUNT_VIDEO_PLAYER, payload }))

    const ended$ = Rx.Observable.fromEvent(player, 'ended')
      .map(x => store.getState().video.id)
      .map(id => id === playlist.length - 1 ? 0 : id + 1)
      .map(x => ({ src: playlist[x], id: x }))
      .map(payload => ({ type: LOAD_NEXT_VIDEO, payload }))

    const playing$ = Rx.Observable.fromEvent(player, 'playing')
      .map(x => {
        if (!store.getState().video.initialized) {
          store.dispatch(_ => completeFadeWithTime(800))
          store.dispatch(initializePlayer)
          store.dispatch(beginFade)
        }

        player.playbackRate = 0.6
      })
      .map(_ => ({ type: ADJUST_PLAYBACK_RATE }))

    return Rx.Observable.merge(start$, ended$, playing$)
  }
)

export const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ src: null, id: 0 })
      .map(payload => ({ type: UNMOUNT_VIDEO_PLAYER, payload }))
  )
)
