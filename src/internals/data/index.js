import iOS from './ios'
import OSS from './oss'
import WEB from './web'
import TECH from './tech'
import { groupA, groupB } from './videos'
import { nav, work, about, contact } from './site'

const getTechItems = items => (
  TECH.filter(x => items.filter(item => item === x.slug)[0])
)

const assembleProjects = _ => {
  const createProjectSlides = (x, i) => ({
    src: `build/` + require(`work-images/${x}`),
    active: i === 0
  })

  const nav = WEB.map(({ id, thumbnail }) => ({
    src: `build/` + require(`work-images/${thumbnail}`),
    id
  }))

  const projects = WEB.map(({ tech, images, ...props }) => (
    Object.assign({}, props, {
      tech: getTechItems(tech),
      images: images.map(createProjectSlides)
    })
  ))

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
    desktop: nav.desktop,
    mobile: nav.mobile
  },
  contact: {
    links: contact.links
  },
  about: {
    bio: about.bio,
    featuredTech: getTechItems(about.tech)
  },
  work: {
    nav: work.nav,
    iOS,
    OSS
  }
})

export default {
  site: assembleSiteStatics(),
  slideshow: assembleProjects(),
  video: assembleVideos()
}
