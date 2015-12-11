'use strict';
export const SET_PROJECT_TECH = 'SET_PROJECT_TECH';
export const SET_PROJECT_LINKS = 'SET_PROJECT_LINKS';
export const SET_PROJECT_INFO = 'SET_PROJECT_INFO';
export const SET_PROJECT_IMAGES = 'SET_PROJECT_IMAGES'

export function setProjectTech(ids) {
  return {
    type: SET_PROJECT_TECH,
    ids
  };
}

export function setProjectLinks(links) {
  return {
    type: SET_PROJECT_LINKS,
    links
  };
}

export function setProjectInfo(name, description) {
  return {
    type: SET_PROJECT_INFO,
    name,
    description
  };
}

export function setProjectImages(images) {
  return {
    type: SET_PROJECT_IMAGES,
    images
  };
}