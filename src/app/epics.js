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
  VIDEO_PLAYING,
  VIDEO_ENDED,
} from './containers/Home/constants'

const setLoadingTimeout = action$ => {
  return action$.ofType(MOUNT_VIDEO)
    .switchMap(action => {
      return Observable.timer(3000)
        .mapTo({ type: HIDE_LOADER })
        .takeUntil(action$.ofType(VIDEO_PLAYING))
        .startWith({ type: FADE_LOADER })
      })
}

const videoPlaying = action$ => {
  return action$.ofType(VIDEO_PLAYING)
    .switchMap(action => {
      return Observable.timer(300)
        .mapTo({ type: HIDE_LOADER })
        .startWith({ type: FADE_LOADER })
    })
}

const videoEnded = action$ => {
  return action$.ofType(VIDEO_ENDED)
    .mapTo({ type: PLAY_NEXT })
}

export default combineEpics(setLoadingTimeout, videoPlaying, videoEnded)
