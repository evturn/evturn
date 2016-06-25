import webProjects from './web'
import devicons from './devicons'

function assembleCarousel() {

  function assignImageSource(props) {
    return {
      ...props,
      src: `build/` + require(`work-images/${props.src}`)
    }
  }

  function reducer(acc, x) {
    if (!acc.nav) { acc.nav = [] }
    if (!acc.projects) { acc.projects = [] }

    acc.nav.push(assignImageSource({ src: x.thumbnail, id: x.id }))
    acc.projects.push({
      ...x,
      images: x.images
        .map((x, i) => assignImageSource({ src: x, active: i === 0 })),
      tech: x.tech
        .map(x => devicons.filter(y => x === y.slug))
    })

    return acc
  }

  return webProjects.reduce(reducer, {})
}

export default assembleCarousel()
