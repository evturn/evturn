import PROJECTS from 'db/projects';
import TECH from 'db/tech';

const PATH = 'src/client/assets/';

const setProjectsNav = () => {
  return PROJECTS.map(project => {
    return {
      id: project.id,
      image: `${PATH}${project.thumbnail}`
    };
  });
};

const filterFeaturedTech = () => {
  return TECH.filter(obj => {
    return obj.featured;
  }).map(obj => {
    return obj;
  });
};

const filterProjectTech = (ids) => {
  return TECH.filter(o => {
    return ids.indexOf(o.id) !== -1 ? true : false;
  });
};

const setProjects = () => {
  return PROJECTS.map(project => {
    const { techIds, images, ...props } = project;

    return Object.assign({}, props, {
      tech: filterProjectTech(techIds),
      slides: images.map(image => `${PATH}${image}`)
    });
  });
};

export const projectsNav = setProjectsNav();
export const projects = setProjects();
export const featuredTech = filterFeaturedTech();