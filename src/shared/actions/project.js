import store from '../store';

const dispatch = store.dispatch;

const projectLoaded = (project) => {
  return {
    type: 'PROJECT_LOADED',
    project
  };
};

export const setProject = (id) => {
  const index = !id ? 0 : id - 1;
  const projects = store.getState().work.projects;

  dispatch(projectLoaded(projects[index]));
};