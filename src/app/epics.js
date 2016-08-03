import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import * as Types from './constants'

const setLoadingTimeout = action$ => {
  return action$.ofType(Types.MOUNT_VIDEO)
    .switchMap(action => {
      return Observable.timer(3000)
        .mapTo({ type: Types.HIDE_LOADER })
        .takeUntil(action$.ofType(Types.VIDEO_PLAYING))
        .startWith({ type: Types.FADE_LOADER })
      })
}

const videoPlaying = action$ => {
  return action$.ofType(Types.VIDEO_PLAYING)
    .switchMap(action => {
      return Observable.timer(300)
        .mapTo({ type: Types.HIDE_LOADER })
        .startWith({ type: Types.FADE_LOADER })
    })
}

const videoEnded = action$ => {
  return action$.ofType(Types.VIDEO_ENDED)
    .mapTo({ type: Types.PLAY_NEXT })
}

// const loadProject = action$ => {
//   return action$.ofType(Types.MOUNT_CAROUSEL)
//     .switchMap(action => {
//       return Observable.
//     })
// }

export default combineEpics(setLoadingTimeout, videoPlaying, videoEnded)
