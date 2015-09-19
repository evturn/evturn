"use strict";

(function(app) {

  let Get = {};

  Get.links = function() {
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

  Get.stats = function() {
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
        number: 6000,
        icon: 'fa fa-code'
      }
    ];
  };

  Get.tech = function() {
    return [
      {
        technology: 'Node.js',
        icon: 'devicon-nodejs-plain-wordmark',
        color: 'devicon-nodejs-plain-wordmark colored',
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
        icon: 'devicon-nodejs-plain',
        color: 'devicon-nodejs-plain colored',
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
      }
    ];
  };

  Get.apps = function() {
    return [
      {
        name: 'Made In Music',
        description: "This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.",
        id: 1,
        url: 'http://madeinmusic.co',
        repo: 'https://github.com/evturn/madeinmusic.co',
        thumbnail: "public/dist/img/mim-tn.png",
        items: [
          {image: 'public/dist/img/mim-1.png'},
          {image: 'public/dist/img/mim-2.png'},
          {image: 'public/dist/img/mim-3.png'}
        ],
        featured: true,
        technologies: [1, 3, 14, 12, 10, 11, 15]
      },
      {
        name: 'Marshallz Blog',
        description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
        id: 2,
        url: 'http://marshallz.com',
        repo: 'https://github.com/evturn/marshallz',
        thumbnail: "public/dist/img/marshallz-tn.png",
        items: [
          {image: 'public/dist/img/marshallz-1.png'},
          {image: 'public/dist/img/marshallz-2.png'},
          {image: 'public/dist/img/marshallz-6.png'},
          {image: 'public/dist/img/marshallz-3.jpg'},
          {image: 'public/dist/img/marshallz-5.png'},
          {image: 'public/dist/img/marshallz-4.jpg'}
        ],
        featured: true,
        technologies: [1, 3, 14, 12, 15, 9, 11]
      },
      {
        name: 'Drive Publishing',
        description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
        id: 4,
        url: 'http://drivepublishing.com',
        repo: 'https://github.com/drivepublishing/drivepublishing.github.io',
        thumbnail: "public/dist/img/drive-tn.png",
        items: [
          {image: 'public/dist/img/drive-1.png'},
          {image: 'public/dist/img/drive-2.png'},
          {image: 'public/dist/img/drive-3.png'}
        ],
        featured: true,
        technologies: [13, 11, 14]
      },
      {
        name: 'Ramen Buffet',
        description: "Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
        id: 6,
        url: 'http://ramenbuffet.com',
        repo: 'https://github.com/evturn/ramen-buffet',
        thumbnail: "public/dist/img/ramen-buffet-tn.png",
        items: [
          {image: 'public/dist/img/ramen-buffet-1.png'},
          {image: 'public/dist/img/ramen-buffet-2.png'},
          {image: 'public/dist/img/ramen-buffet-3.png'}
        ],
        featured: true,
        technologies: [1, 3, 14, 12, 10, 11, 15]
      },
      {
        name: 'Alculator',
        description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
        id: 5,
        thumbnail: "public/dist/img/alculator-tn.png",
        items: [
          {image: 'public/dist/img/alculator-3.png'},
          {image: 'public/dist/img/alculator-2.png'},
          {image: 'public/dist/img/alculator-1.png'},
          {image: 'public/dist/img/alculator-4.png'}
        ],
        featured: true,
        technologies: [1, 12, 3, 11]
      },
      {
        name: 'Pique',
        description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
        id: 3,
        repo: 'https://github.com/piqueapp/piqueapp.github.io',
        thumbnail: "public/dist/img/pique-tn.png",
        items: [
          {image: 'public/dist/img/pique-1.jpg'},
          {image: 'public/dist/img/pique-2.png'},
          {image: 'public/dist/img/pique-3.png'},
          {image: 'public/dist/img/pique-4.png'}
        ],
        featured: true,
        technologies : [16, 17, 11]
      },
      {
        name: 'Hangman',
        description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
        id: 7,
        thumbnail: "public/dist/img/hangman-tn.png",
        items: [
          {image: 'public/dist/img/hangman-1.jpg'},
          {image: 'public/dist/img/hangman-2.jpg'}
        ],
        featured: true,
        technologies: [1, 12, 3, 11]
      },
      {
        name: 'Tic Tac Toe',
        description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
        id: 8,
        thumbnail: "public/dist/img/ttt-tn.png",
        items: [
          {lead: 'public/dist/img/ttt-1.jpg'},
          {image: 'public/dist/img/ttt-2.jpg'}
        ],
        featured: false,
        technologies: [3, 11]
      },
      {
        name: 'WhereTO',
        description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
        id: 9,
        repo: 'https://github.com/evturn/WhereTO',
        thumbnail: "public/dist/img/whereto-tn.png",
        items: [
          {image: 'public/dist/img/whereto-2.png'},
          {image: 'public/dist/img/whereto-1.png'}
        ],
        featured: true,
        technologies: [1, 14, 12, 10, 13]
      }
    ];
  };

  Get.bio = function() {
    return [
      {
        paragraph: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.'
      },
      {
        paragraph: 'While I enjoy building in a Node.js runtime environment, having worked with Rails and the MVC architectural pattern the framework implements, I find libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.'
      }
    ];
  };

  return _.extend(app, Get);

})(EVTURN);