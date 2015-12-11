'use strict';
const initialAbout = {
  tech: [],
  stats: []
};

const initialWork = {
  project: {}
};

export function workReducer(state = initialWork, action) {

  console.log('action project', action.project);
  switch (action.type) {
    case 'SET_PROJECT':
      const project = { project: action.project };
      return Object.assign({}, state, project);
    default:
      return state;
    }
  return state;
}

export function aboutReducer(state = initialAbout, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return Object.assign({}, state, {
        tech: state.tech,
        stats: state.stats
      });
    default:
      return state;
    }
}