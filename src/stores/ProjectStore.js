import alt from '../libs/alt';
import __projects from 'sources/projects';
import __tech from 'sources/tech';
import ProjectActions from 'actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.bindActions(ProjectActions);
    this.software = __tech;
    this.thumbnails = null;
  }
  static all() {
    const internalState = this.getState();
    return internalState;
  }
  static next(id) {
    this.setProject(id);
  }
  getProjectById(id) {
    let found = false;
    let result = __projects.filter((p) => {
      if (p.id === parseInt(id)) {
        found = true;
        return p;
      }
    });

    if (!found) { result = __projects[0]; }
    if (Array.isArray(result)) { [result] = result; }

    return result;
  }
  setThumbnails() {
    this.thumbnails = __projects.map((project) => {
      return {
        id: project.id,
        image: this.getRelativePath(project.thumbnail)
      };
    });
  }
  setTech(ids) {
    const tech = [];

    for (let id of ids) {
      for (let obj of this.software) {
        if (id === obj.id) {
          tech.push(obj);
        }
      }
    }

    return tech;
  }
  setSlides(images) {
    return images.map((image) => {
      return this.getRelativePath(image);
    });
  }
  setProject(projectId) {
    if (this.thumbnails === null) {
      this.setThumbnails();
    }

    const result = __projects[!projectId ? 0 : projectId - 1];
    const tech = this.setTech(result.techIds);
    const images = this.setSlides(result.images);
    const project = Object.assign({}, {
      images: images,
      tech: tech,
      name: result.name,
      description: result.description,
      id: result.id,
      links: result.links,
      activeId: result.id,
      projects: this.thumbnails
    });

    this.setState(project);
  }
  getRelativePath(absolutePath) {
    const prefix = 'src/assets/';

    return `${prefix}${absolutePath}`;
  }
}

export default alt.createStore(ProjectStore, 'ProjectStore');