import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import * as Types from './constants'
import { sortVideos } from './reducers/video'
import { selectProject } from './reducers/projects'

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

const loadProject = (action$, store) => {
  return action$.ofType(Types.MOUNT_CAROUSEL)
    .switchMap(action => {
      const project = selectProject({
        slug: action.payload.slug,
        items: store.getState().projects.web.items,
        tech: store.getState().content.tech
      })
      return Observable.of({
        type: Types.SELECT_PROJECT,
        payload: { project }
      })
    })
}

const nextSlide = action$ => {
  return action$.ofType(Types.SELECT_PROJECT)
    .switchMap(action => {
      return Observable.interval(4000)
        .mapTo({ type: Types.NEXT_SLIDE })
        .takeUntil(action$.ofType(Types.UNMOUNT_CAROUSEL))
    })
}

export default combineEpics(
  setLoadingTimeout,
  videoPlaying,
  videoEnded,
  abortVideoMount,
  shuffleVideos,
  loadProject,
  nextSlide,
)
