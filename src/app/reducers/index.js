import { combineReducers } from 'redux';
import video from 'reducers/video';
import site from 'reducers/site';
import slideshow from 'reducers/slideshow';

const rootReducer = combineReducers({ video, site, slideshow });

export default rootReducer;