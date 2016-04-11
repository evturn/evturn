import {
  siteNav, mobileNav,
  workNav, bio, contactLinks } from 'db/elements';
import videos from 'db/videos';
import iOS from 'db/work-ios';
import OSS from 'db/work-oss';
import web from 'db/work-web';
import TECH from 'db/tech';

const createWebProjectsNav = project => ({
  id: project.id,
  image: require(`work-images/${project.thumbnail}`)
});

const createWebProject = project => {
  const { techIds, images, ...props } = project;

  return Object.assign({}, props, {
    tech: TECH.filter(techItem => techIds.indexOf(techItem.id) !== -1),
    slides: images.map(filename => require(`work-images/${filename}`))
  });
}

const projects = web.map(createWebProject);

export default {
  site: {
    mobileNav: mobileNav,
    pages: siteNav,
    contact: {
      links: contactLinks
    },
    about: {
      bio: bio,
      featuredTech: TECH.filter(techItem => techItem.featured)
    },
  },
  work: {
    nav: workNav,
    projects: projects,
    projectsNav: web.map(createWebProjectsNav),
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