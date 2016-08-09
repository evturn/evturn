function contentReducer(state={
  tech: [],
  tools: [],
  copy: '',
  contact: [],
}, action) {
  return state
}

export default contentReducer

export const selectTech = state => {
  return state.tools.reduce((acc, x) => {
    return state.tech
      .filter(y => x === y.slug)
      .concat(acc)
  }, [])
}
