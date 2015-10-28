'use strict';
exports.videos = () => {
  return [
    'https://www.dropbox.com/s/nijl1tqzivxjlnd/vid-8.m4v?dl=1',
    'https://www.dropbox.com/s/ibiy6fwqjyb5uaw/vid-7.m4v?dl=1',
    'https://www.dropbox.com/s/23upki10se8ve37/vid-15.m4v?dl=1',
    'https://www.dropbox.com/s/pinkna2jree0czu/vid-1.m4v?dl=1',
    'https://www.dropbox.com/s/8tqgae5yuf7x1n7/vid-6.m4v?dl=1',
    'https://www.dropbox.com/s/0dk58ha0o191qmx/vid-11.m4v?dl=1',
    'https://www.dropbox.com/s/jszss7t0msash80/vid-10.m4v?dl=1',
    'https://www.dropbox.com/s/0c507odqgqwjqv2/vid-3.m4v?dl=1',
    'https://www.dropbox.com/s/dsab5kvchdzvzyp/vid-12.m4v?dl=1',
    'https://www.dropbox.com/s/p56i6t3gxwbypbs/vid-16.m4v?dl=1',
    'https://www.dropbox.com/s/a7vmoy155re7drv/vid-18.m4v?dl=1',
    'https://www.dropbox.com/s/wloza0nswfwxb9f/vid-14.m4v?dl=1',
    'https://www.dropbox.com/s/7y7zkt6a9ty7ebr/vid-17.m4v?dl=1',
    'https://www.dropbox.com/s/ogq5n2az7o8ooxp/vid-2.m4v?dl=1'
  ];
};

exports.links = () => {
  return [
    {
      name: 'email',
      url: 'mailto:evturn@gmail.com',
      icon: 'fa fa-envelope',
      featured: true
    },
    {
      name: 'github',
      url: 'http://github.com/evturn',
      icon: 'fa fa-github-square',
      featured: true
    },
    {
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/evturn/',
      icon: 'fa fa-linkedin-square',
      featured: true
    },
    {
      name: 'general assembly',
      url: 'https://profiles.generalassemb.ly/ev',
      icon: 'fa fa-certificate',
      featured: false
    },
    {
      name: 'twitter',
      url: 'http://twitter.com/evturn',
      icon: 'fa fa-twitter',
      featured: true
    },
    {
      name: 'skype: @evturn',
      url: 'javaScript:void(0);', // jshint ignore:line
      icon: 'fa fa-skype',
      featured: false
    }
  ];
};

exports.stats = () => {
  return [
    {
      text: 'Quesadillas Eaten',
      number: 777074,
      icon: 'fa fa-check'
    },
    {
      text: 'Weekly Commits',
      number: 276,
      icon: 'fa fa-terminal'
    },
    {
      text: 'Github Contributions',
      number: 7000,
      icon: 'fa fa-code'
    }
  ];
};

exports.tech = () => {
  return [
    {
      technology: 'Node.js',
      icon: 'devicon-nodejs-plain',
      color: 'devicon-nodejs-plain colored',
      id: 1,
      featured: true
    },
    {
      technology: 'AngularJS',
      icon: 'devicon-angularjs-plain',
      color: 'devicon-angularjs-plain colored',
      id: 2,
      featured: false
    },
    {
      technology: 'Backbone.js',
      icon: 'devicon-backbonejs-plain',
      color: 'devicon-backbonejs-plain colored',
      id: 3,
      featured: true
    },
    {
      technology: 'jQuery',
      icon: 'devicon-jquery-plain',
      color: 'devicon-jquery-plain colored',
      id: 4,
      featured: false
    },
    {
      technology: 'Bootstrap',
      icon: 'devicon-bootstrap-plain',
      color: 'devicon-bootstrap-plain colored',
      id: 5,
      featured: false
    },
    {
      technology: 'git',
      icon: 'devicon-git-plain',
      color: 'devicon-git-plain colored',
      id: 6,
      featured: true
    },
    {
      technology: 'Photoshop',
      icon: 'devicon-photoshop-plain',
      color: 'devicon-photoshop-plain colored',
      id: 7,
      featured: true
    },
    {
      technology: 'Ubuntu',
      icon: 'devicon-ubuntu-plain',
      color: 'devicon-ubuntu-plain colored',
      id: 8,
      featured: true
    },
    {
      technology: 'Firebase',
      icon: 'fa fa-database one-half-em',
      color: 'fa fa-database one-half-em',
      id: 9,
      featured: false
    },
    {
      technology: 'MongoDB',
      icon: 'devicon-mongodb-plain',
      color: 'devicon-mongodb-plain colored',
      id: 10,
      featured: true
    },
    {
      technology: 'Underscore.js',
      icon: 'fa fa-minus one-half-em',
      color: 'fa fa-minus one-half-em',
      id: 11,
      featured: false
    },
    {
      technology: 'Express.js',
      icon: 'evcon-express',
      color: 'evcon-express',
      id: 12,
      featured: true
    },
    {
      technology: 'Sass',
      icon: 'devicon-sass-original',
      color: 'devicon-sass-original colored',
      id: 13,
      featured: true
    },
    {
      technology: 'Gulp.js',
      icon: 'devicon-gulp-plain',
      color: 'devicon-gulp-plain',
      id: 14,
      featured: true
    },
    {
      technology: 'Less',
      icon: 'devicon-less-plain-wordmark',
      color: 'devicon-less-plain-wordmark',
      id: 15,
      featured: true
    },
    {
      technology: 'Rails',
      icon: 'devicon-rails-plain-wordmark',
      color: 'devicon-rails-plain-wordmark',
      id: 16,
      featured: false
    },
    {
      technology: 'PostgreSQL',
      icon: 'devicon-postgresql-plain-wordmark',
      color: 'devicon-postgresql-plain-wordmark',
      id: 17,
      featured: false
    },
    {
      technology: 'Handlebars',
      icon: 'evcon-handlebars',
      color: 'evcon-handlebars',
      id: 18
    },
    {
      technology: 'Webpack',
      icon: 'evcon-webpack',
      color: 'evcon-webpack',
      id: 19
    },
    {
      technology: 'Babel',
      icon: 'evcon-babel',
      color: 'evcon-babel',
      id: 20
    },
    {
      technology: 'Wordpress',
      icon: 'fa fa-wordpress',
      color: 'fa fa-wordpress',
      id: 21
    }
  ];
};

exports.apps = () => {
  return [
    {
      name: 'Made In Music',
      description: "This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.",
      id: 1,
      url: 'http://madeinmusic.co',
      repo: 'https://github.com/evturn/madeinmusic.co',
      thumbnail: "public/dist/img/apps/mim-tn.png",
      items: [
        {image: 'public/dist/img/apps/mim-1.png'},
        {image: 'public/dist/img/apps/mim-2.png'},
        {image: 'public/dist/img/apps/mim-3.png'}
      ],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15, 20]
    },
    {
      name: 'Marshallz Blog',
      description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
      id: 2,
      url: 'http://marshallz.com',
      repo: 'https://github.com/evturn/marshallz',
      thumbnail: 'public/dist/img/apps/marshallz-tn.png',
      items: [
        {image: 'public/dist/img/apps/marshallz-1.png'},
        {image: 'public/dist/img/apps/marshallz-2.png'},
        {image: 'public/dist/img/apps/marshallz-6.png'},
        {image: 'public/dist/img/apps/marshallz-3.jpg'},
        {image: 'public/dist/img/apps/marshallz-5.png'},
        {image: 'public/dist/img/apps/marshallz-4.jpg'}
      ],
      featured: true,
      technologies: [1, 14, 12, 15, 10, 18, 19, 20]
    },
    {
      name: 'Drive Publishing',
      description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
      id: 4,
      url: 'http://drivepublishing.com',
      repo: 'https://github.com/drivepublishing/drivepublishing.github.io',
      thumbnail: "public/dist/img/apps/drive-tn.png",
      items: [
        {image: 'public/dist/img/apps/drive-1.png'},
        {image: 'public/dist/img/apps/drive-2.png'},
        {image: 'public/dist/img/apps/drive-3.png'}
      ],
      featured: true,
      technologies: [13, 11, 14, 20]
    },
    {
      name: 'Ramen Buffet',
      description: "Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
      id: 6,
      url: 'http://ramenbuffet.com',
      repo: 'https://github.com/evturn/ramen-buffet',
      thumbnail: "public/dist/img/apps/rb-tn.png",
      items: [
        {image: 'public/dist/img/apps/ramen-buffet-1.png'},
        {image: 'public/dist/img/apps/ramen-buffet-2.png'},
        {image: 'public/dist/img/apps/ramen-buffet-3.png'}
      ],
      featured: true,
      technologies: [1, 3, 14, 12, 10, 11, 15, 18, 20]
    },
    {
      name: 'Alculator',
      description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
      id: 5,
      thumbnail: "public/dist/img/apps/alculator-tn.png",
      items: [
        {image: 'public/dist/img/apps/alculator-3.png'},
        {image: 'public/dist/img/apps/alculator-2.png'},
        {image: 'public/dist/img/apps/alculator-1.png'},
        {image: 'public/dist/img/apps/alculator-4.png'}
      ],
      featured: true,
      technologies: [1, 12, 3, 11]
    },
    {
      name: 'Pique',
      description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
      id: 3,
      repo: 'https://github.com/piqueapp/piqueapp.github.io',
      thumbnail: "public/dist/img/apps/pique-tn.png",
      items: [
        {image: 'public/dist/img/apps/pique-1.jpg'},
        {image: 'public/dist/img/apps/pique-2.png'},
        {image: 'public/dist/img/apps/pique-3.png'},
        {image: 'public/dist/img/apps/pique-4.png'}
      ],
      featured: true,
      technologies : [16, 17, 11]
    },
    {
      name: 'Hangman',
      description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
      id: 7,
      thumbnail: "public/dist/img/apps/hangman-tn.png",
      items: [
        {image: 'public/dist/img/apps/hangman-1.jpg'},
        {image: 'public/dist/img/apps/hangman-2.jpg'}
      ],
      featured: false,
      technologies: [1, 12, 3, 11]
    },
    {
      name: 'Tic Tac Toe',
      description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
      id: 8,
      thumbnail: "public/dist/img/apps/ttt-tn.png",
      items: [
        {lead: 'public/dist/img/apps/ttt-1.jpg'},
        {image: 'public/dist/img/apps/ttt-2.jpg'}
      ],
      featured: false,
      technologies: [3, 11]
    },
    {
      name: 'Brooklyn Friends School',
      description: 'I collaborated in the development of the frontend builds that SM&KK Studios had designed for a complete refresh of the Brooklyn Friends School brand.',
      id: 9,
      url: 'http://smkkstudios.com/work/brooklynfriendsschool',
      thumbnail: "public/dist/img/apps/bfs-tn.jpg",
      items: [
        {image: 'public/dist/img/apps/bfs-1.png'},
        {image: 'public/dist/img/apps/bfs-2.png'}
      ],
      featured: true,
      technologies: [21, 13]
    },
    {
      name: 'WhereTO',
      description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
      id: 10,
      repo: 'https://github.com/evturn/WhereTO',
      thumbnail: "public/dist/img/apps/whereto-tn.png",
      items: [
        {image: 'public/dist/img/apps/whereto-2.png'},
        {image: 'public/dist/img/apps/whereto-1.png'}
      ],
      featured: true,
      technologies: [1, 14, 12, 10, 13]
    }
  ];
};

exports.bio = () => {
  return [
    {
      paragraph: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.'
    },
    {
      paragraph: 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.'
    }
  ];
};