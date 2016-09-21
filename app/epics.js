import { combineEpics } from 'redux-observable'
import homeEpics from 'containers/Home/epics'
import webEpics from 'containers/Web/epics'

export default combineEpics(homeEpics, webEpics)
