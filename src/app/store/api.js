import videos from 'db/videos';
import iOS from 'db/work-ios';
import OSS from 'db/work-oss';
import WEB from 'db/work-web';
import TECH from 'db/tech';
import { nav, work, about, contact } from 'db/locals';

const createWebProjectsNav = ({ id, thumbnail }) => ({
  image: require(`work-images/${thumbnail}`),
  id
});

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
    images: images.map(filename => require(`work-images/${filename}`))
  })
}

export default {
  site: {
    nav: nav.desktop,
    mobileNav: nav.mobile,
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
    presentations: WEB.map(createWebProject)
  },
  video: {
    playlist: videos
  }
}