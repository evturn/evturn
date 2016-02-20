import { combineReducers } from 'redux';
import video from './video';
import site from './site';
import work from './work';
import carousel from './carousel';

const rootReducer = combineReducers({ video, site, work, carousel });

export default rootReducer;