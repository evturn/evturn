import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

const setLoadingTimeout = action$ => {
  return action$.ofType('MOUNT_VIDEO')
    .switchMap(action => {
      if (action.payload.shouldAbort) {
        return Observable.timer(1000)
          .mapTo({ type: 'HIDE_LOADER' })
          .startWith({ type: 'FADE_LOADER' })
      }

      return Observable.timer(3000)
        .mapTo({ type: 'HIDE_LOADER' })
        .takeUntil(action$.ofType('HIDE_LOADER'))
        .startWith({ type: 'FADE_LOADER' })
        .delay(1000)
    })
}

const abortVideoMount = action$ => {
  return action$.ofType('ABORT_MOUNT')
    .switchMap(action => {
      return Observable.timer(300)
        .mapTo({ type: 'HIDE_LOADER' })
        .startWith({ type: 'FADE_LOADER' })
    })
}

const videoPlaying = action$ => {
  return action$.ofType('VIDEO_PLAYING')
    .switchMap(action => {
      return Observable.timer(300)
        .mapTo({ type: 'HIDE_LOADER' })
        .startWith({ type: 'FADE_LOADER' })
    })
}

const videoEnded = action$ => {
  return action$.ofType('VIDEO_ENDED')
    .mapTo({ type: 'PLAY_NEXT' })
}

const shuffleVideos = action$ => {
  const sortVideos = items => {
    const firstHalf = shuffle(items.slice(0, 5), [ items[0] ])
    const secondHalf = shuffle(items.slice(6, items.length), [])
    return firstHalf.concat(secondHalf)
  }

  function shuffle(items, acc) {
    if (acc.length === items.length) {
      return acc
    }
    const randomSelection = items[Math.floor(Math.random() * items.length)]

    if (!acc.includes(randomSelection)) {
      acc.push(randomSelection)
    }
    return shuffle(items, acc)
  }

  return action$.ofType('MOUNT_VIDEO')
    .switchMap(action => {
      return Observable.of({
        type: 'SHUFFLE_VIDEOS',
        payload: { playlist: sortVideos(action.payload.videos) }
      })
    })
}

const loadProject = (action$, store) => {
  const selectProject = state => {
    return state.items
      .filter(x => x.slug === state.slug)
      .map(project => ({
        ...project,
        tech: project.tech
          .map(x => state.tech.filter(y => y.slug === x)[0])
      }))[0]
  }

  return action$.ofType('MOUNT_CAROUSEL')
    .switchMap(action => {
      const project = selectProject({
        slug: action.payload.slug,
        items: store.getState().projects.web.items,
        tech: store.getState().content.tech
      })
      return Observable.of({
        type: 'SELECT_PROJECT',
        payload: { project }
      })
    })
}

const nextSlide = action$ => {
  return action$.ofType('SELECT_PROJECT')
    .switchMap(action => {
      return Observable.interval(4000)
        .mapTo({ type: 'NEXT_SLIDE' })
        .takeUntil(action$.ofType('UNMOUNT_CAROUSEL'))
    })
}

export default combineEpics(
  setLoadingTimeout,
  abortVideoMount,
  videoPlaying,
  videoEnded,
  shuffleVideos,
  loadProject,
  nextSlide
)
