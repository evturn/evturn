import { combineReducers } from 'redux';
import video from 'reducers/video';
import site from 'reducers/site';
import slideshow from 'reducers/slideshow';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  video,
  site,
  slideshow,
  routing: routerReducer
});

export default rootReducer;