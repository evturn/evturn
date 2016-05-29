import iOS from './ios'
import OSS from './oss'
import WEB from './web'
import TECH from './tech'
import sections from './sections'
import contact from './contact'
import { groupA, groupB } from './videos'
import { mobile, desktop } from './nav'
import { copy, tools } from './about'

const filterTechItems = items => (
  TECH.filter(x => items.filter(item => item === x.slug)[0])
)

const createSlides = (x, i) => ({
  src: `build/` + require(`work-images/${x}`),
  active: i === 0
})

const createThumbnails = ({ thumbnail, id }) => ({
  src: `build/` + require(`work-images/${thumbnail}`),
  id
})

const assembleProjects = _ => {
  const nav = WEB.map(createThumbnails)
  const projects = WEB.map(x => ({
    ...x,
    images: x.images.map(createSlides),
    tech: filterTechItems(x.tech)
  }))

  return {
    nav,
    projects
  }
}

const assembleVideos = _ => {
  const head = []

  const shuffle = _ => {
    const vid = groupA[Math.floor(Math.random() * groupA.length)]
    const exists = head.filter(x => x === vid)[0]

    !exists ? head.push(vid) : shuffle()
  }

  while(head.length !== groupA.length) {
    shuffle()
  }

  return { playlist: head.concat(groupB) }
}

const assembleSiteStatics = _ => ({
  nav: {
    desktop,
    mobile
  },
  contact,
  copy: copy.join(' '),
  tools: filterTechItems(tools),
  iOS,
  OSS,
  sections
})

export default {
  site: assembleSiteStatics(),
  slideshow: assembleProjects(),
  video: assembleVideos()
}
