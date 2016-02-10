import PROJECTS from 'db/projects';
import TECH from 'db/tech';

const setFeaturedTech = () => {
  return TECH.filter(obj => {
    return obj.featured;
  }).map(obj => {
    return obj;
  });
};



const PATH = 'src/client/assets/';

const setThumbnails = () => {
  return PROJECTS.map(project => {
    return {
      id: project.id,
      image: `${PATH}${project.thumbnail}`
    };
  });
};

const setProjectTech = (techIds) => {
  const tech = [];

  for (let id of techIds) {
    for (let obj of TECH) {
      if (id === obj.id) {
        tech.push(obj);
      }
    }
  }

  return tech;
};

const setFeaturedProjects = () => {
  return PROJECTS.map(project => {
    const { techIds, images, ...props } = project;

    return Object.assign({}, props, {
      tech: setProjectTech(techIds),
      slides: images.map(image => `${PATH}${image}`)
    });
  });
};

export const projectsNav = setThumbnails();
export const projects = setFeaturedProjects();
export const featuredTech = setFeaturedTech();