import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import * as Types from '../../constants'
import { sortVideos } from 'containers/Home/selectors'

const setLoadingTimeout = action$ => {
  return action$.ofType(Types.MOUNT_VIDEO)
    .switchMap(action => {
      if (action.payload.shouldAbort) {
        return Observable.timer(1000)
          .mapTo({ type: Types.HIDE_LOADER })
          .startWith({ type: Types.FADE_LOADER })
      }

      return Observable.timer(3000)
        .mapTo({ type: Types.HIDE_LOADER })
        .takeUntil(action$.ofType(Types.HIDE_LOADER))
        .startWith({ type: Types.FADE_LOADER })
        .delay(1000)
    })
}

const abortVideoMount = action$ => {
  return action$.ofType(Types.ABORT_MOUNT)
    .switchMap(action => {
      return Observable.timer(300)
        .mapTo({ type: Types.HIDE_LOADER })
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

const shuffleVideos = action$ => {
  return action$.ofType(Types.MOUNT_VIDEO)
    .switchMap(action => {
      return Observable.of({
        type: Types.SHUFFLE_VIDEOS,
        payload: { playlist: sortVideos(action.payload.videos) }
      })
    })
}

export default combineEpics(
  setLoadingTimeout,
  abortVideoMount,
  videoPlaying,
  videoEnded,
  shuffleVideos,
)
