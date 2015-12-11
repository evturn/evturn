'use strict';
import { SET_ABOUT_TECH, SET_ABOUT_STATS } from 'actions/about';

const initialState = {
  tech: [],
  stats: []
};

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ABOUT_TECH':
      return Object.assign({}, state, {
        tech: state.tech
      });
    case 'SET_ABOUT_STATS':
      return Object.assign({}, state, {
        stats: state.stats
      });
    default:
      return state;
    }
}