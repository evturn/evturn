export const nav = {
  desktop: [
    { name: 'Home',    route: '/'      ,  id: 1 },
    { name: 'Work',    route: 'work/web', id: 2 },
    { name: 'About',   route: 'about'  ,  id: 3 },
    { name: 'Contact', route: 'contact',  id: 4 }
  ],
  mobile: [
    { name: 'Work',    route: 'work/web' },
    { name: 'About',   route: 'about'    },
    { name: 'Contact', route: 'contact'  }
  ]
}

export const work = {
  nav: [
    {
      title: 'Web',
      route: 'work/web',
      icon: 'fa fa-laptop'
    },{
      title: 'iOS',
      route: 'work/ios',
      icon: 'fa fa-mobile'
    },{
      title: 'Open Source',
      route: 'work/oss',
      icon: 'fa fa-code-fork'
    }
  ]
}

export const contact = {
  links: [
    {
      name: 'email',
      url: 'mailto:evturn@gmail.com',
      icon: 'fa fa-envelope',
      featured: true
    }, {
      name: 'github',
      url: 'http://github.com/evturn',
      icon: 'fa fa-github-square',
      featured: true
    }, {
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/evturn/',
      icon: 'fa fa-linkedin-square',
      featured: true
    }, {
      name: 'twitter',
      url: 'http://twitter.com/evturn',
      icon: 'fa fa-twitter',
      featured: true
    }
  ]
}

export const about = {
  bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
  tech: [
    'node',
    'react',
    'javascript',
    'swift',
    'rxjs',
    'gulp',
    'webpack',
    'redux',
    'mongodb',
    'git',
    'ubuntu',
    'photoshop',
    'less'
  ]
}