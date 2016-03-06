import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

import VIDEOS from '../server/db/videos';
import NAV from '../server/db/nav';
import LINKS from '../server/db/links';
import STATS from '../server/db/stats';
import TEXT from '../server/db/text';
import IOS from '../server/db/work-ios';
import OSS from '../server/db/work-oss';
import { projects, projectsNav, featuredTech } from '../server/data';

const initialState = {
  site: {
    pages: NAV,
    contact: {
      links: LINKS
    },
    about: {
      bio: TEXT,
      featuredTech: featuredTech,
      stats: STATS
    },
  },
  work: {
    projects: projects,
    projectsNav: projectsNav,
    project: [ projects ],
    iOS: IOS,
    OSS: OSS
  },
  video: {
    total: VIDEOS.length - 1,
    playlist: VIDEOS
  },
  carousel: {},
};

const middleware = !window.__DEV__ ?  applyMiddleware(thunk) : applyMiddleware(thunk, logger());
const store = createStore(rootReducer, initialState, middleware);

export default store;