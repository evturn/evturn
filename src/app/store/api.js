import videos from 'db/videos';
import iOS from 'db/work-ios';
import OSS from 'db/work-oss';
import WEB from 'db/work-web';
import TECH from 'db/tech';
import {
  siteNav, mobileNav, bio,
  workNav, contactLinks } from 'db/elements';

const createWebProjectsNav = ({ id, thumbnail }) => ({
  image: require(`work-images/${thumbnail}`),
  id
});

const createWebProject = ({ tech, images, ...props }) => {

  return Object.assign({}, props, {
    tech: TECH.filter(item => {
      let match = false;

      tech.map(x => {
        if (x === item.slug) {
          match = true;
        }
      })

      return match;
    }),
    images: images.map(filename => require(`work-images/${filename}`))
  });
}

const featuredTech = TECH.filter(x => x.featured);
const web = WEB.map(createWebProject);
const carouselNav = WEB.map(createWebProjectsNav);

export default {

  site: {
    nav: siteNav,
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