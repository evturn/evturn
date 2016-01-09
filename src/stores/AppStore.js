import assign from 'object-assign';
import alt from '../libs/alt';
import __projects from 'sources/projects';
import __tech from 'sources/tech';
import AppActions from 'actions/AppActions';

function getRelativePath(absolutePath) {
  const prefix = 'src/assets/';

  return `${prefix}${absolutePath}`;
}

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


class AppStore {
  constructor() {
    this.bindActions(AppActions);


  }
  setFeaturedProjects() {
    return getFeatured(__projects);
  }
  setFeaturedTech() {
    return getFeatured(__tech);
  }
  setProjectCarouselSlides(images) {
    return images.map((image) => {
      return getRelativePath(image);
    });
  }
  getFeatured(dataSource) {
    const featured = [];

    for (let obj of dataSource) {
      obj.featured ? featured.push(obj) : '';
    }
    return featured;
  }
  setProjectThumbnails(projects) {
    return projects.map((project) => {
      const url = getRelativePath(project.thumbnail);
      return {
        id: project.id,
        image: url
      };
    });
  }
  setProject(id) {
    const { project } = findProjectById(parseInt(id));
    project.tech = findTechByIds(project.techIds);

    this.setState({
      project: project,
      activeId: project.id
    });
  }
  getTechItems() {
    return __tech.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  }
}

export default alt.createStore(AppStore, 'AppStore');