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

export const mountPlayer = player => (
  (actions, store) => {
    if (window.innerWidth <= 1024) {
      return Rx.Observable.of({ done: true, ready: true })
        .map(payload => ({ type: KILL_LOADING_SCREEN, payload }))
    }

    store.dispatch(actions => Rx.Observable.timer(3000)
      .map(_ => ({ done: true }))
      .map(payload => ({ type: KILL_LOADING_SCREEN, payload }))
      .takeUntil(actions.ofType(INITIALIZE_PLAYER))
    )

    const playlist = store.getState().video.playlist

    const start$ = Rx.Observable.from(playlist)
      .filter((_, i) => i === 0)
      .map(x => ({ src: x, id: 0 }))
      .map(payload => ({ type: MOUNT_VIDEO_PLAYER, payload }))

    const playing$ = Rx.Observable.fromEvent(player, 'playing')
      .map(x => {
        if (!store.getState().video.initialized) {
          store.dispatch(_ => Rx.Observable.timer(800)
            .map(_ => ({ done: true }))
            .map(payload => ({ type: KILL_LOADING_SCREEN, payload  }))
          )
          store.dispatch(_ => Rx.Observable.of({ initialized: true, ready: true })
            .map(payload => ({ type: INITIALIZE_PLAYER, payload }))
          )
        }

        player.playbackRate = 0.6
      })
      .map(_ => ({ type: ADJUST_PLAYBACK_RATE }))

    const ended$ = Rx.Observable.fromEvent(player, 'ended')
      .map(x => store.getState().video.id)
      .map(id => id === playlist.length - 1 ? 0 : id + 1)
      .map(x => ({ src: playlist[x], id: x }))
      .map(payload => ({ type: LOAD_NEXT_VIDEO, payload }))

    return Rx.Observable.merge(start$, playing$, ended$)
  }
)

export const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ src: null, id: 0 })
      .map(payload => ({ type: UNMOUNT_VIDEO_PLAYER, payload }))
  )
)
