export default {
  projects: {
    web: {
      items: [{
        name: 'Drive Publishing',
        description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
        id: 1,
        slug: 'drive',
        links: [{
            name: 'Website',
            url: 'http://drivepublishing.com',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/drivepublishing/drivepublishing.github.io',
            icon: 'fa fa-github-square'
        }],
        thumbnail: 'drive-tn.png',
        images: [
          'drive-1.png',
          'drive-2.png',
          'drive-3.png',
          'drive-4.png'
        ],
        tech: ['node', 'gulp', 'sass']
      },{
        name: 'Marshallz Blog',
        description: `Built using React, Redux, and RxJS, this program continuously posts new content to the website in addition to posting on Twitter. Content for these posts are gathered anywhere from RSS feeds to online washing machine manuals.`,
        id: 2,
        slug: 'marshallz',
        links: [{
            name: 'Website',
            url: 'http://marshallz.com',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/marshallz',
            icon: 'fa fa-github-square'
          }, {
            name: 'Twitter',
            url: 'http://twitter.com/marshallzBlog',
            icon: 'fa fa-twitter'
        }],
        thumbnail: 'marshallz-tn.png',
        images: [
          'marshallz-1.png',
          'marshallz-2.png',
          'marshallz-3.png'
        ],
        tech: ['node', 'react', 'redux', 'mongodb', 'rxjs', 'webpack', 'less']
      },{
        name: 'Nutty Goodness',
        description: 'Led by New York City based product design and development shop Born & Raised for health snack producer, Nutty Goodness.',
        id: 3,
        slug: 'nutty-goodness',
        links: [{
          name: 'Website',
          url: 'http://nuttygoodness.com',
          icon: 'fa fa-chrome'
        },{
          name: 'B&R',
          url: 'http://wearebnr.com',
          icon: 'fa fa-circle-o'
        }],
        thumbnail: 'ng-tn.png',
        images: [
          'ng-1.png',
          'ng-2.png',
          'ng-3.png',
          'ng-4.png',
          'ng-5.png'
        ],
        tech: ['node', 'gulp', 'less']

      },{
        name: 'Golfweek',
        description: 'A complete rebuild of Golfweek.com which included a customized CMS. Designed and built by New York City based product design and development shops Born & Raised and Gigareef.',
        id: 4,
        slug: 'golfweek',
        links: [{
          name: 'Website',
          url: 'http://golfweek.com',
          icon: 'fa fa-chrome'
        },{
          name: 'B&R',
          url: 'http://wearebnr.com',
          icon: 'fa fa-circle-o'
        },{
          name: 'Gigareef',
          url: 'http://gigareef.com',
          icon: 'fa fa-circle-o'
        }],
        thumbnail: 'gw-tn.png',
        images: [
          'gw-1.png',
          'gw-2.png'
        ],
        tech: ['wordpress', 'gulp', 'less']
      },{
        name: 'Brooklyn Friends School',
        description: `SM&KK Studios designed a complete refresh of the Brooklyn Friends School brand.`,
        id: 5,
        slug: 'bfs',
        links: [
          {
            name: 'Website',
            url: 'http://brooklynfriends.org/',
            icon: 'fa fa-chrome'
          },{
            name: 'SMKK',
            url: 'http://smkkstudios.com/work/brooklynfriendsschool',
            icon: 'fa fa-circle-o'
          }
        ],
        thumbnail: 'bfs-tn.png',
        images: [
          'bfs-1.png',
          'bfs-2.png',
          'bfs-3.png'
        ],
        tech: ['wordpress', 'sass']
      },{
        name: 'Mama We Made It',
        description: `A 'Universal' React application custom CMS. All data is sent upon inital load with the app rendering on both the server and client side.`,
        id: 6,
        slug: 'mwmi',
        links: [{
            name: 'Website',
            url: 'http://mamawemadeit.com',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/mwmi',
            icon: 'fa fa-github-square'
        }],
        thumbnail: 'mwmi-tn.png',
        images: [
          'mwmi-1.png',
          'mwmi-2.png'
        ],
        tech: ['node', 'react', 'rxjs', 'redux', 'webpack', 'mongodb']
      },{
        name: 'Tectonic',
        description: `Displays a real-time list of earthquakes, including information about their locations, magnitudes, and dates. All data for the map and any earthquake comes through from the USGS. Using RxJS, a Reactive Extensions library, this stream of data is merged with another a WebSocket server that takes coordinates from earthquakes as they arrive and searches Twitter for tweet in that location.`,
        id: 7,
        slug: 'gin-tectonic',
        links: [{
            name: 'Website',
            url: 'http://evturn.com/gin-tectonic',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/gin-tectonic',
            icon: 'fa fa-github-square'
        }],
        thumbnail: 'https://i.ytimg.com/vi/lz9VzshE0_4/hqdefault.jpg',
        thumbnail: 'tectonic-tn.png',
        images: [
          'tectonic-1.png',
          'tectonic-2.png'
        ],
        tech: ['node', 'rxjs', 'web-socket', 'less', 'webpack']
      },{
        name: 'Made In Music',
        description: `Keystone.js, a Node based CMS, uses Express and MongoDB.`,
        id: 8,
        slug: 'mim',
        links: [{
            name: 'Website',
            url: 'http://madeinmusic.co',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/madeinmusic.co',
            icon: 'fa fa-github-square'
        }],
        thumbnail: 'mim-tn.png',
        images: [
          'mim-1.png',
          'mim-2.png',
          'mim-3.png'
        ],
        tech: ['node', 'backbone', 'mongodb', 'gulp', 'less']
      },{
        name: 'Pique',
        description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
        id: 9,
        slug: 'pique',
        links: [{
          name: 'Github',
          url: 'https://github.com/piqueapp/piqueapp.github.io',
          icon: 'fa fa-github-square'
        }],
        thumbnail: 'pique-tn.png',
        images: [
          'pique-1.png',
          'pique-2.png',
          'pique-3.png',
          'pique-4.png'
        ],
        tech : ['rails', 'postgresql']
      },{
        name: 'Where TO',
        description: `Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.`,
        id: 10,
        slug: 'where-to',
        links: null,
        thumbnail: 'whereto-tn.png',
        images: [
          'whereto-2.png',
          'whereto-1.png'
        ],
        tech: ['node', 'mongodb', 'sass']
      },{
        name: 'Ramen Buffet',
        description: `Manage multiple lists of tasks or todos. Lists can be sorted by importance, priority, or status.`,
        id: 11,
        slug: 'ramen-buffet',
        links: [{
            name: 'Website',
            url: 'http://ramenbuffet.com',
            icon: 'fa fa-chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/ramen-buffet',
            icon: 'fa fa-github-square'
        }],
        thumbnail: 'rb-tn.png',
        images: [
          'ramen-buffet-1.png',
          'ramen-buffet-2.png',
          'ramen-buffet-3.png'
        ],
        tech: ['node', 'backbone', 'mongodb', 'handlebars', 'less']
      }]
    },

    ios: {
      items: [{
          name: 'Troposphere',
          id: 1,
          image: 'troposphere.png'
        },{
          name: 'Mixtape',
          id: 2,
          image: 'mixtape.png'
        },{
          name: 'Confectionery',
          id: 3,
          image: 'confectionery.png'
        },{
          name: 'Dumb Facts',
          id: 4,
          image: 'dumb-facts.png'
      }]
    },

    oss: {
      items: [{
        name: 'Sentence Generator',
        description: `Extracted from a web application I built that continuously generates automated text content for blog posts. The specific part of the program is an implementation of a Markov-chain. The sentence generator portion is available as a installable package for Node developers.`,
        id: 1,
        slug: 'sentence-generator',
        links: [{
            url: 'https://github.com/evturn/sentence-generator',
            icon: 'fa fa-github'
          },{
            url: 'https://www.npmjs.com/package/sentence-generator',
            icon: 'evcon-npm'
          }
        ]},{
        name: 'Object Iterable',
        description: `Create a new object containing the same properties of any given source object along with an @@iterator method to make use of the default iteration behavior (such as for-of) that built-in iterables like Array or Map have.`,
        id: 2,
        slug: 'object-iterable',
        links: [{
            url: 'https://github.com/evturn/object-iterable',
            icon: 'fa fa-github'
          },{
            url: 'https://www.npmjs.com/package/object-iterable',
            icon: 'evcon-npm'
        }]
      },{
        name: 'Proto',
        description: `A small utility for inheriting and/or copying properties from one JavaScript object to another using prototypes without constructor functions.`,
        id: 3,
        slug: 'proto',
        links: [{
            url: 'https://github.com/evturn/proto',
            icon: 'fa fa-github'
          }, {
            url: 'https://www.npmjs.com/package/@evturn/proto',
            icon: 'evcon-npm'
        }]
      },{
        name: 'Slackbots',
        description: `This package allows for developers to easily create customized instances of new Bots on Slack. This API uses Web Sockets and the native Node Event Emitter to send messages in real time. Once configured all chatroom activity can be used to trigger your bot's behavior.`,
        id: 4,
        slug: 'slackbots',
        links: [{
          url: 'https://github.com/faquet/bots',
          icon: 'fa fa-github'
        }]
      },{
        name: 'Babel Preset',
        description: `A preset of Babel plugins used to compile new and proposed features of the JavaScript specification into backwards compatible code for browser engines.`,
        id: 5,
        slug: 'sentence-generator',
        links: [{
          url: 'https://github.com/evturn/babel-preset-evturn',
          icon: 'fa fa-github'
        },{
          url: 'https://www.npmjs.com/package/babel-preset-evturn',
          icon: 'evcon-npm'
        }]
      }]
    }
  },

  video: {
    items: [
      'https://www.dropbox.com/s/ijpt86526hf68ve/vid-28.m4v?dl=1',
      'https://www.dropbox.com/s/nijl1tqzivxjlnd/vid-8.m4v?dl=1',
      'https://www.dropbox.com/s/bjoecb0guaeqkh1/vid-25.m4v?dl=1',
      'https://www.dropbox.com/s/ibiy6fwqjyb5uaw/vid-7.m4v?dl=1',
      'https://www.dropbox.com/s/lubs0xrmu3iqaud/vid-24.m4v?dl=1',
      'https://www.dropbox.com/s/pinkna2jree0czu/vid-1.m4v?dl=1',
      'https://www.dropbox.com/s/wd5zt4mj1s6duyt/vid-23.m4v?dl=1',
      'https://www.dropbox.com/s/e9crqmruokitmzr/vid-22.m4v?dl=1',
      'https://www.dropbox.com/s/5qa9ojk3ao7s0zg/vid-26.m4v?dl=1',
      'https://www.dropbox.com/s/0c507odqgqwjqv2/vid-3.m4v?dl=1',
      'https://www.dropbox.com/s/p56i6t3gxwbypbs/vid-16.m4v?dl=1',
      'https://www.dropbox.com/s/23upki10se8ve37/vid-15.m4v?dl=1',
      'https://www.dropbox.com/s/8tqgae5yuf7x1n7/vid-6.m4v?dl=1',
      'https://www.dropbox.com/s/0dk58ha0o191qmx/vid-11.m4v?dl=1',
      'https://www.dropbox.com/s/jszss7t0msash80/vid-10.m4v?dl=1',
      'https://www.dropbox.com/s/dsab5kvchdzvzyp/vid-12.m4v?dl=1',
      'https://www.dropbox.com/s/a7vmoy155re7drv/vid-18.m4v?dl=1',
      'https://www.dropbox.com/s/wloza0nswfwxb9f/vid-14.m4v?dl=1',
      'https://www.dropbox.com/s/ogq5n2az7o8ooxp/vid-2.m4v?dl=1'
    ]
  },

  content: {
    tools: [ 'less', 'photoshop', 'ubuntu', 'git', 'mongodb', 'gulp', 'redux', 'webpack', 'rxjs', 'swift', 'javascript', 'react', 'node' ],
    copy: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
    contact: [{
      name: 'email',
      url: 'mailto:evturn@gmail.com',
      icon: 'fa fa-envelope'
    }, {
      name: 'github',
      url: 'http://github.com/evturn',
      icon: 'fa fa-github-square'
    }, {
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/evturn/',
      icon: 'fa fa-linkedin-square'
    }, {
      name: 'twitter',
      url: 'http://twitter.com/evturn',
      icon: 'fa fa-twitter-square'
    }],

    tech: [{
      name: 'Node',
      icon: 'devicon-nodejs-plain',
      slug: 'node'
    },{
      name: 'React',
      icon: 'devicon-react-plain-wordmark',
      slug: 'react'
    },{
      name: 'RxJS',
      icon: 'evcon-rxjs',
      slug: 'rxjs'
    },{
      name: 'Redux',
      icon: 'evcon-redux',
      slug: 'redux'
    },{
      name: 'Webpack',
      icon: 'evcon-webpack',
      slug: 'webpack'
    },{
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain',
      slug: 'mongodb'
    },{
      name: 'Less',
      icon: 'devicon-less-plain-wordmark',
      slug: 'less'
    },{
      name: 'git',
      icon: 'devicon-git-plain',
      slug: 'git'
    },{
      name: 'JavaScript',
      icon: 'devicon-javascript-plain',
      slug: 'javascript'
    },{
      name: 'iOS',
      icon: 'fa fa-apple',
      slug: 'ios'
    },{
      name: 'Swift',
      icon: 'evcon-swift',
      slug: 'swift'
    },{
      name: 'Gulp',
      icon: 'devicon-gulp-plain',
      slug: 'gulp'
    },{
      name: 'Backbone',
      icon: 'devicon-backbonejs-plain',
      slug: 'backbone'
    },{
      name: 'Babel',
      icon: 'evcon-babel',
      slug: 'babel'
    },{
      name: 'Handlebars',
      icon: 'evcon-handlebars',
      slug: 'handlebars'
    },{
      name: 'Ubuntu',
      icon: 'devicon-ubuntu-plain',
      slug: 'ubuntu'
    }, {
      name: 'Firebase',
      icon: 'fa fa-database one-half-em',
      slug: 'firebase'
    },{
      name: 'Underscore',
      icon: 'fa fa-minus one-half-em',
      slug: 'underscore'
    }, {
      name: 'Express',
      icon: 'evcon-express',
      slug: 'express'
    }, {
      name: 'Sass',
      icon: 'devicon-sass-original',
      slug: 'sass'
    },{
      name: 'Rails',
      icon: 'devicon-rails-plain-wordmark',
      slug: 'rails'
    }, {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain-wordmark',
      slug: 'postgresql'
    },{
      name: 'Wordpress',
      icon: 'devicon-wordpress-plain',
      slug: 'wordpress',
    }, {
      name: 'Photoshop',
      icon: 'devicon-photoshop-plain',
      slug: 'photoshop'
    },{
      name: 'AngularJS',
      icon: 'devicon-angularjs-plain',
      slug: 'angular'
    },{
      name: 'jQuery',
      icon: 'devicon-jquery-plain',
      slug: 'jquery'
    },{
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain',
      slug: 'bootstrap'
    },{
      name: 'CSS Preprocessors',
      icon: 'devicon-css3-plain-wordmark',
      slug: 'css'
    },{
      name: 'Web Socket',
      icon: 'evcon-web-socket',
      slug: 'web-socket'
    },{
      name: 'Browserify',
      icon: 'evcon-browserify',
      slug: 'browserify'
    }]
  }
}
