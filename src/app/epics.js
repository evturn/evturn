import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import {
  MOUNT_VIDEO,
  MOUNT_SUCCESS,
  MOUNT_ERROR,
  ABORT_MOUNT,
  PLAY_NEXT,
  UNMOUNT_VIDEO,
  FADE_LOADER,
  HIDE_LOADER,
} from './containers/Home/constants'

const setLoadingTimeout = action$ => {
  return action$.ofType(MOUNT_VIDEO)
    .switchMap(action => {
      return Observable.merge(
        Observable.timer(3000)
          .mapTo({ type: HIDE_LOADER })
          .takeUntil(action$.ofType(MOUNT_SUCCESS))
          .startWith({ type: FADE_LOADER }),
        Observable.fromEvent(action.player, 'playing')
          .flatMap(_ => {
            action.player.playbackRate = 0.5
            return Observable.timer(300)
              .mapTo({ type: HIDE_LOADER })
              .startWith({ type: FADE_LOADER })
          }),
        Observable.fromEvent(action.player, 'ended')
          .mapTo({ type: PLAY_NEXT })
        )
    })
}

const mountSuccess = action$ => {
  return action$.ofType(MOUNT_VIDEO)
    .flatMap(action => {
      return Observable.fromEvent(action.player, 'playing')
        .mapTo({ type: MOUNT_SUCCESS })
    })
}


export default combineEpics(setLoadingTimeout, mountSuccess)
