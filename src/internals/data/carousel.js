import webProjects from './web'
import devicons from './devicons'

function assembleCarousel() {

  function assignImageSource(props) {
    return {
      ...props,
      src: props.src
    }
  }

  function reducer(acc, x) {
    if (!acc.nav) { acc.nav = [] }
    if (!acc.projects) { acc.projects = [] }

    acc.nav.push(assignImageSource({
      src: 'https://media3.giphy.com/media/lpydvIOdsHw0U/200_s.gif',
      id: x.id
    }))
    acc.projects.push({
      ...x,
      images: x.images
        .map((x, i) => assignImageSource({
          src: 'https://media3.giphy.com/media/lpydvIOdsHw0U/200_s.gif',
          active: i === 0
        })),
      tech: x.tech
        .map(x => devicons.filter(y => x === y.slug))
    })

    return acc
  }

  return webProjects.reduce(reducer, {})
}

export default assembleCarousel()
