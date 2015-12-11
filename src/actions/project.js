'use strict';
const SET_PROJECT_ID = 'SET_PROJECT_ID';
const SET_PROJECT_IMAGES = 'SET_PROJECT_IMAGES'
const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
const SET_PROJECT_TECH = 'SET_PROJECT_TECH';
const SET_PROJECT_DESCRIPTION = 'SET_PROJECT_DESCRIPTION';
const SET_PROJECT_LINKS = 'SET_PROJECT_LINKS';


export function setProjectId(id) {
  return {
    type: SET_PROJECT_ID,
    id
  };
}

export function setProjectImages(images) {
  return {
    type: SET_PROJECT_IMAGES,
    images
  };
}

export function setProjectName(name) {
  return {
    type: SET_PROJECT_NAME,
    name
  };
}

export function setProjectDescription(description) {
  return {
    type: SET_PROJECT_DESCRIPTION,
    description
  };
}

export function setProjectTech(tech) {
  return {
    type: SET_PROJECT_TECH,
    tech
  };
}

export function setProjectLinks(links) {
  console.log(links);
  return {
    type: SET_PROJECT_LINKS,
    links
  };
}

