export const selectProject = state => {
  return state.items
    .filter(x => x.slug === state.slug)
    .map(project => ({
      ...project,
      tech: project.tech
        .map(x => state.tech.filter(y => y.slug === x)[0])
    }))[0]
}
