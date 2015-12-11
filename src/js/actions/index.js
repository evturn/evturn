'use strict';
const GET_PROJECT = 'GET_PROJECT';
const GET_ABOUT = 'GET_ABOUT';
const SET_PROJECT = 'SET_PROJECT';
const SET_ABOUT = 'SET_ABOUT';

export function setAbout(tech, stats) {
  return {
    type: SET_ABOUT,
    tech,
    stats
  };
}

export function setProject(project) {
  return {
    type: SET_PROJECT,
    project
  };
}

export function getProject(id) {
  return {
    type: SET_PROJECT,
    id
  };
}