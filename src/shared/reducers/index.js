import { combineReducers } from 'redux';
import video from 'reducers/video';
import site from 'reducers/site';
import work from 'reducers/work';
import carousel from 'reducers/carousel';

const rootReducer = combineReducers({ video, site, work, carousel });

export default rootReducer;