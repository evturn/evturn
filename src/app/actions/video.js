import * as Rx from 'rxjs'

export const MOUNT_VIDEO_PLAYER = 'MOUNT_VIDEO_PLAYER'
export const INITIALIZE_PLAYER = 'INITIALIZE_PLAYER'
export const KILL_LOADING_SCREEN = 'KILL_LOADING_SCREEN'
export const FADE_LOADING_SCREEN = 'FADE_LOADING_SCREEN'
export const LOAD_NEXT_VIDEO = 'LOAD_NEXT_VIDEO'
export const UNMOUNT_VIDEO_PLAYER = 'UNMOUNT_VIDEO_PLAYER'

export const mountPlayer = player => (
  (actions, store) => {
    if (window.innerWidth < 600) {
      return store.dispatch(
        () => Rx.Observable.timer(800)
          .map(_ => [
            { type: FADE_LOADING_SCREEN, payload: { ready: true } },
            { type: KILL_LOADING_SCREEN, payload: { done: true } }
          ])
      )
    }

    store.dispatch(
      (actions) => Rx.Observable.timer(3000)
        .map(_ => ({ type: KILL_LOADING_SCREEN, payload: { done: true } }))
        .takeUntil(actions.ofType(INITIALIZE_PLAYER))
    )

    const videos = store.getState().video.playlist
    const mount$ = Rx.Observable.from(videos)
      .filter((_, i) => i === 0)
      .map(x => ({ src: x, id: 0 }))
      .map(payload => ({ type: MOUNT_VIDEO_PLAYER, payload }))

    const play$ = Rx.Observable.fromEvent(player, 'playing')

    const init$ = play$
      .map(x => {
        player.playbackRate = 0.6
        if (!store.getState().video.initialized) {
          store.dispatch(
            (actions) => Rx.Observable.timer(800)
              .map(_ => ({ type: KILL_LOADING_SCREEN, payload: { done: true } }))
          )
          return ({ type: INITIALIZE_PLAYER, payload: { initialized: true, ready: true } })
        }

        return ({ type: INITIALIZE_PLAYER, payload: { initialized: true, ready: true } })
      })

    // const speed$ = play$.map(x => x.playbackRate = 0.6)

    const end$ = Rx.Observable.fromEvent(player, 'ended')
      .map(x => store.getState().video.id)
      .map(id => id === videos.length - 1 ? 0 : id + 1)
      .map(x => ({ type: LOAD_NEXT_VIDEO, payload: { src: videos[x], id: x } }))

    return Rx.Observable.merge(mount$, init$, end$)
  }
)

export const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ type: UNMOUNT_VIDEO_PLAYER, payload: { src: null, id: 0 } })
  )
)