import webProjects from './web'
import devicons from './devicons'

const nav = webProjects.reduce((acc, x) => {
  acc.push({
    src: 'https://media3.giphy.com/media/lpydvIOdsHw0U/200_s.gif',
    id: x.id
  })
  return acc
}, [])


const projects = webProjects.reduce((acc, x) => {
  acc.push({
    ...x,
    images: x.images
      .map((x, i) => ({
        src: 'https://media3.giphy.com/media/lpydvIOdsHw0U/200_s.gif',
        active: i === 0
      })),
    tech: x.tech.map(x => devicons.filter(y => x === y.slug))
  })
  return acc
}, [])

export default { nav, projects }
