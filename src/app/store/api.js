import {
  siteNav, mobileNav,
  workNav, bio, contactLinks } from 'db/elements';
import videos from 'db/videos';
import iOS from 'db/work-ios';
import OSS from 'db/work-oss';
import web from 'db/work-web';
import TECH from 'db/tech';

function filterFeaturedTech() {
  return TECH.filter(obj => obj.featured).map(obj => obj);
}

function filterProjectTech(ids) {
  return TECH.filter(o => ids.indexOf(o.id) !== -1 ? true : false);
}

function setProjectsNav() {
  return web.map(obj => {
    return {
      id: obj.id,
      image: obj.thumbnail
    };
  });
}

function setProjects() {
  return web.map(project => {
    const { techIds, images, ...props } = project;

    return Object.assign({}, props, {
      tech: filterProjectTech(techIds),
      slides: images
    });
  });
}

const projects = setProjects();
const projectsNav = setProjectsNav();
const aboutTech = filterFeaturedTech();

export default {
  site: {
    mobileNav: mobileNav,
    pages: siteNav,
    contact: {
      links: contactLinks
    },
    about: {
      bio: bio,
      featuredTech: aboutTech
    },
  },
  work: {
    nav: workNav,
    projects: projects,
    projectsNav: projectsNav,
    project: [ projects ],
    iOS: iOS,
    OSS: OSS
  },
  video: {
    total: videos.length - 1,
    playlist: videos
  },
  carousel: {},
};