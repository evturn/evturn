'use strict';
import { default as __projects } from 'sources/projects';
import { default as __tech } from 'sources/tech';

function findProjectById(id = 4) {
  let found = false;
  let project = null;

  __projects.map((p, i) => {
    if (p.id === id) {
      project = p;
      found = true;
    } else if ((__projects.length - 1 === i) && !found && project === null) {
      project = __projects[0];
    }
  });

  return { project };
}

function findTechByIds(ids) {
  const tech = [];

  for (let id of ids) {
    for (let obj of __tech) {
      if (id === obj.id) {
        tech.push(obj);
      }
    }
  }

  return tech;
}

function getFeatured(dataSource) {
  const featured = [];

  for (let obj of dataSource) {
    obj.featured ? featured.push(obj) : '';
  }
  return featured;
}

export const URL = {
  hash: () => {
    return window.location.hash;
  },
  location: () => {
    return window.location;
  },
  route: () => {
    return window.location.hash.substr(1);
  },
  page: () => {
    return window.location.hash.substring(1, window.location.hash.indexOf('/'));
  },
  child: () => {
    const fromSecondPath = window.location.hash.substr(window.location.hash.indexOf('/') + 1);
    return fromSecondPath.substr(0, fromSecondPath.indexOf('/'));
  },
  params: () => {
    const hash = window.location.hash.substr(1);
    return hash.substr(hash.lastIndexOf('/') + 1);
  }
};

export function getPage(route) {
  let page;

  if (route === "") {
    return 'home';
  } else if (route.startsWith('work/projects')) {
    return 'work';
  } else {
    return route;
  }
}

export function updateLayout(location) {
  const { pathname } = location;
  const key = pathname.split('/')[1] || 'index';
  const el = document.getElementById('site-container');

  el.removeAttribute('class');
  el.classList.add(`page-${key}`);
}

export function setProject(id) {
  const { project } = findProjectById(parseInt(id));
  project.tech = findTechByIds(project.techIds);

  return project;
}

export function setFeaturedProjects() {
  return getFeatured(__projects);
}

export function setFeaturedTech() {
  return getFeatured(__tech);
}