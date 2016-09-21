export const selectTech = state => {
  return state.tools.reduce((acc, x) => {
    return state.tech
      .filter(y => x === y.slug)
      .concat(acc)
  }, [])
}
