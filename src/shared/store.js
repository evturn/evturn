import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';

import videos from 'sources/videos';
import nav from 'sources/nav';
import links from 'sources/links';
import stats from 'sources/stats';
import featuredTech from 'sources/featuredTech';
import { projects, projectsNav } from 'sources/featuredProjects';
import text from 'sources/text';

const initialState = {
  site: {
    pages: nav,
    contact: {
      links: links
    },
    about: {
      bio: text,
      featuredTech: featuredTech,
      stats: stats
    },
  },
  work: {
    projects: projects,
    projectsNav: projectsNav,
    project: projects[0]
  },
  video: {
    total: videos.length - 1,
    playlist: videos
  },
  carousel: {},
};

const logger = createLogger();
const thunk = thunkMiddleware;
const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;