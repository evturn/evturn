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

const mountPlayer = player => (
  (actions, store) => {

    if (store.getState().route.locationBeforeTransitions.pathname.length > 1
      || window.innerWidth <= 1024) {
      return abortVideoPlayerSetup()
    }

    function abortVideoPlayerSetup() {
      return Rx.Observable.timer(800)
        .map(_ => ({ type: REMOVE_LOADING_INDICATOR }))
        .startWith({ type: INITIALIZE_PLAYER_ABORT })
    }

    function videoIsPlaying(player) {
      store.getState().video.initialized
        ? player.playbackRate = 0.6
        : store.dispatch(_ =>
            Rx.Observable.of({ type: INITIALIZE_PLAYER_SUCCESS })
          )

      return Rx.Observable.timer(300)
        .map(_ => ({ type: REMOVE_LOADING_INDICATOR }))
        .startWith({ type: FADE_LOADING_INDICATOR })
    }

    function videoHasEnded(playlist) {
      return Rx.Observable.of(store.getState().video.id)
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
    }


    return Rx.Observable.of(store.getState().video)
      .flatMap(({ playlist }) => {

        store.dispatch(actions =>
          Rx.Observable.timer(3000)
            .map(_ => ({ type: FADE_LOADING_INDICATOR }))
            .takeUntil(actions.ofType(INITIALIZE_PLAYER_SUCCESS))
            .startWith({ type: INITIALIZE_PLAYER })
        )

        return Rx.Observable.merge(
          Rx.Observable.fromEvent(player, 'playing')
            .flatMap(_ => videoIsPlaying(player)),
          Rx.Observable.fromEvent(player, 'ended')
            .flatMap(_ => videoHasEnded(playlist))
        )
      })
  }
)

const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ type: UNMOUNT_PLAYER })
  )
)

export {
  mountPlayer,
  unmountPlayer
}
