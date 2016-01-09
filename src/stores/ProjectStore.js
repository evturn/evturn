import alt from '../libs/alt';
import assign from 'object-assign';
import __projects from 'sources/projects';
import __tech from 'sources/tech';
import ProjectActions from 'actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.bindActions(ProjectActions);
    this.software = __tech;
    this.projects = __projects;
  }
  static all() {
    const internalState = this.getState();
    return internalState;
  }
  static next(id) {
    this.setProject(id);
  }
  setFeaturedTech() {
    return getFeatured(this.software);
  }
  getFeatured(dataSource) {
    const featured = [];

    for (let obj of dataSource) {
      obj.featured ? featured.push(obj) : '';
    }
    return featured;
  }
  setProject(projectId = 1) {
    const tech = [];
    let found = false;
    let result = this.projects.filter((p) => {
      if (p.id === parseInt(projectId)) {
        found = true;
        return p;
      }
    });

    if (!found) {
      result = this.projects[0];
    }

    if (Array.isArray(result)) {
      [result] = result;
    }
    for (let id of result.techIds) {
      for (let obj of this.software) {
        if (id === obj.id) {
          tech.push(obj);
        }
      }
    }

    const thumbnails = this.projects.map((thumb) => {
      return {
        id: thumb.id,
        image: this.getRelativePath(thumb.thumbnail)
      };
    });

    const images = result.images.map((image) => {
      return this.getRelativePath(image);
    });

    const project = assign({}, {
      images: images,
      tech: tech,
      name: result.name,
      description: result.description,
      id: result.id,
      links: result.links,
      activeId: result.id,
      thumbs: thumbnails
    });

    this.setState(project);

  }
  getTechItems() {
    return this.software.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  }
  getRelativePath(absolutePath) {
    const prefix = 'src/assets/';

    return `${prefix}${absolutePath}`;
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore');