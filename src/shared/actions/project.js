import store from 'shared/store';
import __projects from 'sources/projects';
import __tech from 'sources/tech';

const dispatch = store.dispatch;

const PATH = 'src/client/assets/';
const DATA = {
  projects: __projects,
  tech: __tech
};

const projectLoaded = (project) => {
  return {
    type: 'PROJECT_LOADED',
    tech: project.tech,
    slides: project.slides,
    name: project.name,
    description: project.description,
    id: project.id,
    links: project.links,
    thumbnails: project.thumbnails
  };
};

function setThumbnails() {
  return DATA.projects.map(project => {
    return {
      id: project.id,
      image: `${PATH}${project.thumbnail}`
    };
  });
};

const setProjectTech = (techIds) => {
  const tech = [];

  for (let id of techIds) {
    for (let obj of DATA.tech) {
      if (id === obj.id) {
        tech.push(obj);
      }
    }
  }

  return tech;
};

const setProjectSlides = (images) => {
  return images.map((image) => {
    return `${PATH}${image}`;
  });
};

export const setProject = (idParam) => {
  const index = !idParam ? 0 : idParam - 1;
  const {
    name, description, techIds,
    images, id, links
  } = DATA.projects[index];
  const tech = setProjectTech(techIds);
  const slides = setProjectSlides(images);
  const thumbnails = setThumbnails();

  dispatch(
    projectLoaded({
      tech, slides, name, links,
      description, thumbnails, id
    })
  );
};