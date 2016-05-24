export const nav = {
  desktop: [
    {
      name: 'Projects',
      route: 'work/web'
    },{
      name: 'About',
      route: 'about'
    }
  ],
  mobile: [
    { name: 'fa fa-times' },
    { name: 'Home',     route: '/' },
    { name: 'Projects', route: 'work/web' },
    { name: 'About',    route: 'about' }
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
      icon: 'fa fa-twitter-square',
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