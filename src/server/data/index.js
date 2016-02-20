import PROJECTS from '../db/projects';
import TECH from '../db/tech';

function filterFeaturedTech() {
  return TECH.filter(obj => obj.featured).map(obj => obj);
}

function filterProjectTech(ids) {
  return TECH.filter(o => ids.indexOf(o.id) !== -1 ? true : false);
}

function setProjectsNav() {
  return PROJECTS.map(obj => {
    return {
      id: obj.id,
      image: obj.thumbnail
    };
  });
}

function setProjects() {
  return PROJECTS.map(project => {
    const { techIds, images, ...props } = project;

    return Object.assign({}, props, {
      tech: filterProjectTech(techIds),
      slides: images
    });
  });
}

export const projectsNav = setProjectsNav();
export const projects = setProjects();
export const featuredTech = filterFeaturedTech();