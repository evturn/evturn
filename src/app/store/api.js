import videos from 'db/videos';
import iOS from 'db/work-ios';
import OSS from 'db/work-oss';
import WEB from 'db/work-web';
import TECH from 'db/tech';
import {
  siteNav, mobileNav, bio,
  workNav, contactLinks } from 'db/elements';

const createWebProjectsNav = project => {
  const { id, thumbnail } = project;

  return {
    image: require(`work-images/${thumbnail}`),
    id
  };
};

const createWebProject = project => {
  const { techIds, images, ...props } = project;

  return Object.assign({}, props, {
    tech: TECH.filter(techItem => techIds.indexOf(techItem.id) !== -1),
    images: images.map(filename => require(`work-images/${filename}`))
  });
}

const featuredTech = TECH.filter(x => x.featured);
const web = WEB.map(createWebProject);
const carouselNav = WEB.map(createWebProjectsNav);

export default {

  site: {
    pages: siteNav,
    mobileNav,
    contact: {
      links: contactLinks
    },
    about: {
      bio,
      featuredTech
    },
    work: {
      nav: workNav,
      iOS,
      OSS
    }
  },
  slideshow: {
    nav: carouselNav,
    presentations: web
  },
  video: {
    playlist: videos
  }

};