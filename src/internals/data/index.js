import iOS from './ios'
import OSS from './oss'
import WEB from './web'
import TECH from './tech'
import { groupA, groupB } from './videos'
import { nav, work, about, contact } from './site'

const createWebProjectsNav = ({ id, thumbnail }) => ({
  src: `build/` + require(`work-images/${thumbnail}`),
  id
})

const filterTechByName = items => {
  return TECH.filter(x => {
    let match = false

    items.map(item => {
      if (item === x.slug) {
        match = true
      }
    })

    return match
  })
}

const createWebProject = ({ tech, images, ...props }) => {
  return Object.assign({}, props, {
    tech: filterTechByName(tech),
    images: images.map((x, i) => {
      return {
        src: `build/` + require(`work-images/${x}`),
        active: i === 0
      }
    })
  })
}

const shuffleAndMerge = (groupA, groupB) => {
  const head = []

  function shuffle() {
    const vid = groupA[Math.floor(Math.random() * groupA.length)]
    const exists = head.filter(x => x === vid)[0]

    if (!exists) {
      head.push(vid)
    } else {
      shuffle()
    }
  }

  while(head.length !== groupA.length) {
    shuffle()
  }

  return head.concat(groupB)
}

export default {
  site: {
    nav: {
      desktop: nav.desktop,
      mobile: nav.mobile
    },
    contact: {
      links: contact.links
    },
    about: {
      bio: about.bio,
      featuredTech: filterTechByName(about.tech)
    },
    work: {
      nav: work.nav,
      iOS,
      OSS
    }
  },
  slideshow: {
    nav: WEB.map(createWebProjectsNav),
    projects: WEB.map(createWebProject)
  },
  video: {
    playlist: shuffleAndMerge(groupA, groupB)
  }
}
