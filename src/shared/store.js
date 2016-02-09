import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';

import videos from 'sources/videos';
import nav from 'sources/nav';
import links from 'sources/links';
import stats from 'sources/stats';
import tech from 'sources/tech';
import featuredTech from 'sources/featuredTech';
import projects from 'sources/projects';
import text from 'sources/text';

const initialState = {
  site: {
    pages: nav,
    contact: links,
    stats: stats,
    tech: tech,
    about: {
      bio: text,
      featuredTech: featuredTech,
      stats: stats
    },
    projects: projects,

  },
  video: {
    total: videos.length - 1,
    playlist: videos,
    id: null,
    src: null,
    status: null,
    ready: false,
    done: false,
    mounted: false
  },
  carousel: {},
  project: {}
};

const logger = createLogger();
const thunk = thunkMiddleware;
const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;