import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import * as Types from '../../constants'
import { selectProject } from 'containers/Web/selectors'

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

export default combineEpics(loadProject, nextSlide)
