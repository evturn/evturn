'use strict';
import { SET_PROJECT_TECH, SET_PROJECT_LINKS, SET_PROJECT_INFO, SET_PROJECT_IMAGES } from './actions';

const initialState = { project: {} };

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROJECT_IMAGES':
      return [
      ];
    case 'SET_PROJECT_INFO':
      return [
      ];
    case 'SET_PROJECT_TECH':
      return [
      ];
    case 'SET_PROJECT_LINKS':
      return [
      ];
    default:
      return state;
    }
}