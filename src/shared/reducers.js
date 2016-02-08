import { combineReducers } from 'redux';
import video from './reducers/video';
import site from './reducers/site';
import project from './reducers/project';
import carousel from './reducers/carousel';

const rootReducer = combineReducers({ video, site, project, carousel });

export default rootReducer;