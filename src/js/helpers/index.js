'use strict';
import { default as __projects } from 'sources/projects';
import { default as __tech } from 'sources/tech';

function findProjectById(id = 4, fallback = 4) {
  let found = false;
  let project = null;

  __projects.map((p, i) => {
    if (p.id === id) {
      project = p
      found = true;
    } else if ((__projects.length - 1 === i) && !found && project === null) {
      project = __projects[fallback];
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