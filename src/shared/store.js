import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';

import VIDEOS from 'db/videos';
import NAV from 'db/nav';
import LINKS from 'db/links';
import STATS from 'db/stats';
import TEXT from 'db/text';
import { projects, projectsNav, featuredTech } from 'data';

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
    project: [ projects ]
  },
  video: {
    total: VIDEOS.length - 1,
    playlist: VIDEOS
  },
  carousel: {},
};

const logger = createLogger();
const thunk = thunkMiddleware;
const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;