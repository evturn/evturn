import * as Rx from 'rxjs'

import {
  INITIALIZE_PLAYER,
  INITIALIZE_PLAYER_SUCCESS,
  INITIALIZE_PLAYER_ABORT,
  FADE_LOADING_INDICATOR,
  REMOVE_LOADING_INDICATOR,
  PLAY_NEXT_IN_QUEUE,
  UNMOUNT_PLAYER,
} from './constants'

const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ type: UNMOUNT_PLAYER })
  )
)

const mountPlayer = player => (
  (actions, store) => {
    return store.getState().route.pathname.length > 1
      || window.innerWidth <= 1024
        ? Rx.Observable.timer(800)
            .mapTo({ type: REMOVE_LOADING_INDICATOR })
            .startWith({ type: INITIALIZE_PLAYER_ABORT })
        : Rx.Observable.of(store.getState().video)
            .flatMap(({ playlist }) => {
              store.dispatch(startLoadingTimeout)

              return Rx.Observable.merge(
                Rx.Observable.fromEvent(player, 'playing')
                  .map(_ => (
                    store.getState().video.initialized
                      ? player.playbackRate = 0.6
                      : store.dispatch(videoHasInitialized)
                  ))
                  .flatMap(videoIsPlaying),
                Rx.Observable.fromEvent(player, 'ended')
                  .map(_ => store.getState().video.id)
                  .map(videoHasEnded)
                  .flatMap(fn => fn(playlist))
              )
            })
  }
)

function startLoadingTimeout(actions) {
  return Rx.Observable.timer(3000)
    .mapTo({ type: FADE_LOADING_INDICATOR })
    .takeUntil(actions.ofType(INITIALIZE_PLAYER_SUCCESS))
    .startWith({ type: INITIALIZE_PLAYER })
}

function videoHasInitialized() {
  return Rx.Observable.of({ type: INITIALIZE_PLAYER_SUCCESS })
}

function videoIsPlaying() {
  return Rx.Observable.timer(300)
    .mapTo({ type: REMOVE_LOADING_INDICATOR })
    .startWith({ type: FADE_LOADING_INDICATOR })
}

function videoHasEnded(id) {
  return playlist => (
    Rx.Observable.of(id)
      .map(x => (
        x === playlist.length - 1
          ? 0
          : x + 1
      ))
      .map(x => ({
        type: PLAY_NEXT_IN_QUEUE,
        src: playlist[x],
        id: x
      }))
  )
}

export {
  mountPlayer,
  unmountPlayer
}
