export default {
  projects: {
    web: {
      items: [{
        name: 'Drive Publishing',
        description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
        slug: 'drive',
        links: [
          {name: 'Website', url: 'http://drivepublishing.com', icon: 'chrome'},
          {name: 'Github', url: 'https://github.com/drivepublishing/drivepublishing.github.io', icon: 'github'}
        ],
        thumbnail: 'drive-tn.png',
        images: ['drive-1.png', 'drive-2.png', 'drive-3.png', 'drive-4.png'],
        tech: ['node', 'gulp', 'sass']
      },{
        name: 'Golfweek',
        description: 'A complete rebuild of Golfweek.com which included a customized CMS. Designed and built by New York City based product design and development shops Born & Raised and Gigareef.',
        slug: 'golfweek',
        links: [
          {name: 'Website', url: 'http://golfweek.com', icon: 'chrome'},
          {name: 'B&R', url: 'http://wearebnr.com', icon: '⌘'},
          {name: 'Gigareef', url: 'http://gigareef.com', icon: '⌘'}
        ],
        thumbnail: 'gw-tn.png',
        images: ['gw-1.png', 'gw-2.png'],
        tech: ['wordpress', 'gulp', 'less']
      },{
        name: 'Brooklyn Friends School',
        description: `SM&KK Studios designed a complete refresh of the Brooklyn Friends School brand.`,
        slug: 'bfs',
        links: [
          {name: 'Website', url: 'http://brooklynfriends.org/', icon: 'chrome'},
          {name: 'SMKK', url: 'http://smkkstudios.com/work/brooklynfriendsschool', icon: '⌘'}
        ],
        thumbnail: 'bfs-tn.png',
        images: ['bfs-1.png', 'bfs-2.png', 'bfs-3.png'],
        tech: ['wordpress', 'sass']
      },{
        name: 'Brightcove Gallery',
        description: `The Brightcove Gallery is a video portal and CMS for product showcases, live events, and internal communications. I developed half a dozen customizable site templates that also give users the ability to customize colors and designs.`,
        slug: 'brightcove-gallery',
        links: [
          {name: 'Website', url: 'https://brightcove.com/en/gallery', icon: 'chrome'}
        ],
        thumbnail: 'bc-tn.png',
        images: ['bc-1.png', 'bc-2.png', 'bc-3.png'],
        tech: ['node', 'handlebars', 'mongodb', 'less', 'jquery', 'react']
      },{
        name: 'Marshallz Blog',
        description: `Built using React, Redux, and RxJS, this program continuously posts new content to the website in addition to posting on Twitter. Content for these posts are gathered anywhere from RSS feeds to online washing machine manuals.`,
        slug: 'marshallz',
        links: [
          {name: 'Website', url: 'http://marshallz.com', icon: 'chrome' },
          {name: 'Github', url: 'https://github.com/evturn/marshallz', icon: 'github'},
          {name: 'Twitter', url: 'http://twitter.com/marshallzBlog', icon: 'twitter'}
        ],
        thumbnail: 'marshallz-tn.png',
        images: ['marshallz-1.png', 'marshallz-2.png', 'marshallz-3.png'],
        tech: ['node', 'react', 'redux', 'firebase', 'rxjs', 'webpack', 'less', 'reduxobservable']
      },{
        name: 'Nutty Goodness',
        description: 'Led by New York City based product design and development shop Born & Raised for health snack producer, Nutty Goodness.',
        slug: 'nutty-goodness',
        links: [
          {name: 'Website', url: 'http://nuttygoodness.com', icon: 'chrome'},
          {name: 'B&R', url: 'http://wearebnr.com', icon: '⌘'}
        ],
        thumbnail: 'ng-tn.png',
        images: ['ng-1.png','ng-2.png','ng-3.png','ng-4.png','ng-5.png'],
        tech: ['node', 'gulp', 'less']
      },{
        name: 'Mama We Made It',
        description: `A 'Universal' React application custom CMS. All data is sent upon inital load with the app rendering on both the server and client side.`,
        slug: 'mwmi',
        links: [
          {name: 'Website', url: 'http://mamawemadeit.com', icon: 'chrome'},
          {name: 'Github', url: 'https://github.com/evturn/mwmi', icon: 'github'}
        ],
        thumbnail: 'mwmi-tn.png',
        images: ['mwmi-1.png', 'mwmi-2.png'],
        tech: ['node', 'react', 'rxjs', 'redux', 'webpack', 'mongodb']
      },{
        name: 'Tectonic',
        description: `Displays a real-time list of earthquakes, including information about their locations, magnitudes, and dates. All data for the map and any earthquake comes through from the USGS. Using RxJS, a Reactive Extensions library, this stream of data is merged with another a WebSocket server that takes coordinates from earthquakes as they arrive and searches Twitter for tweet in that location.`,
        slug: 'gin-tectonic',
        links: [{
            name: 'Website',
            url: 'http://evturn.com/gin-tectonic',
            icon: 'chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/gin-tectonic',
            icon: 'github'
        }],
        thumbnail: 'https://i.ytimg.com/vi/lz9VzshE0_4/hqdefault.jpg',
        thumbnail: 'tectonic-tn.png',
        images: [
          'tectonic-1.png',
          'tectonic-2.png'
        ],
        tech: ['node', 'rxjs', 'websocket', 'less', 'webpack']
      },{
        name: 'Made In Music',
        description: `Keystone.js, a Node based CMS, uses Express and MongoDB.`,
        slug: 'mim',
        links: [{
            name: 'Website',
            url: 'http://madeinmusic.co',
            icon: 'chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/madeinmusic.co',
            icon: 'github'
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
        slug: 'pique',
        links: [{
          name: 'Github',
          url: 'https://github.com/piqueapp/piqueapp.github.io',
          icon: 'github'
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
        slug: 'ramen-buffet',
        links: [{
            name: 'Website',
            url: 'http://ramenbuffet.com',
            icon: 'chrome'
          }, {
            name: 'Github',
            url: 'https://github.com/evturn/ramen-buffet',
            icon: 'github'
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
      items: [
        { name: 'Troposphere',   image: 'ios-troposphere.jpg' },
        { name: 'Confectionery', image: 'ios-confectionery.jpg' },
        { name: 'Mixtape',       image: 'ios-mixtape.jpg' },
        { name: 'Stratosphere',  image: 'ios-stratosphere.jpg' },
        { name: 'Dumb Facts',    image: 'ios-dumb-facts.jpg' }
      ]
    },

    oss: {
      items: [{
        name: 'Object Iterable',
        description: `Enables iteration for non-iterable types, such as objects, by implementing the iterator protocol.`,
        slug: 'object-iterable',
        links: [
          { url: 'https://github.com/evturn/object-iterable', icon: 'github' },
          { url: 'https://www.npmjs.com/package/object-iterable', icon: 'npm' }
        ]
      },{
        name: 'Meta Preserve',
        description: 'Preserves the creation date of images by replacing File metadata with Exif metadata.',
        slug: 'meta-preserve',
        links: [
          { url: 'https://github.com/evturn/meta-preserve', icon: 'github' }
        ]
      },{
        name: 'Proto',
        description: `Copies properties from one object to another using prototypes without using the \`new\` operator and invoking a constructor call.`,
        slug: 'proto',
        links: [
          { url: 'https://github.com/evturn/proto', icon: 'github' },
          { url: 'https://www.npmjs.com/package/@evturn/proto', icon: 'npm' }
        ]
      },{
        name: 'Sentence Generator',
        description: `Transforms text input into a specified amount of newly generated sentences using a markov-chain.`,
        slug: 'sentence-generator',
        links: [
          { url: 'https://github.com/evturn/sentence-generator', icon: 'github' },
          { url: 'https://www.npmjs.com/package/sentence-generator', icon: 'npm' }
        ]
      },{
        name: 'Slackbots',
        description: `Boilerplate for connecting to the Slack API and running a slackbot.`,
        slug: 'slackbots',
        links: [
          { url: 'https://github.com/faquet/bots', icon: 'github' }
        ]
      },{
        name: 'Babel Preset',
        description: `Specified group of Babel plugins that transpile proposed and newly added language features to the JavaScript spec to backwards compatible versions.`,
        slug: 'babel-preset',
        links: [
          { url: 'https://github.com/evturn/babel-preset-evturn', icon: 'github' },
          { url: 'https://www.npmjs.com/package/babel-preset-evturn', icon: 'npm' }
        ]
      }]
    }
  },

  video: {
    fallback: 'http://res.cloudinary.com/evturn/image/upload/v1474241100/evturn/site/28.gif',
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
    tools: ['node', 'react', 'javascript', 'swift', 'rxjs', 'webpack', 'redux', 'gulp', 'mongodb', 'git', 'ubuntu', 'photoshop', 'less'],
    copy: 'As software and technology evolves, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
    contact: [
      { name: 'email',    url: 'mailto:evturn@gmail.com', icon: 'fa fa-envelope' },
      { name: 'github',   url: 'http://github.com/evturn', icon: 'fa fa-github-square' },
      { name: 'linkedin', url: 'http://www.linkedin.com/in/evturn/', icon: 'fa fa-linkedin-square' },
      { name: 'twitter',  url: 'http://twitter.com/evturn', icon: 'fa fa-twitter-square' }
    ],

    tech: [
      { name: 'Node', icon: 'node', slug: 'node'},
      { name: 'React', icon: 'react', slug: 'react'},
      { name: 'RxJS', icon: 'rxjs', slug: 'rxjs'},
      { name: 'Redux', icon: 'redux', slug: 'redux'},
      { name: 'Webpack', icon: 'webpack', slug: 'webpack'},
      { name: 'MongoDB', icon: 'mongodb', slug: 'mongodb'},
      { name: 'Chrome', icon: 'chrome', slug: 'chrome'},
      { name: 'Less', icon: 'less', slug: 'less'},
      { name: 'git', icon: 'git', slug: 'git'},
      { name: 'JavaScript', icon: 'javascript', slug: 'javascript'},
      { name: 'iOS', icon: 'apple', slug: 'ios'},
      { name: 'Swift', icon: 'swift', slug: 'swift'},
      { name: 'Gulp', icon: 'gulp', slug: 'gulp'},
      { name: 'Backbone', icon: 'backbone', slug: 'backbone'},
      { name: 'Babel', icon: 'babel', slug: 'babel'},
      { name: 'Handlebars', icon: 'handlebars', slug: 'handlebars'},
      { name: 'Ubuntu', icon: 'ubuntu', slug: 'ubuntu'},
      { name: 'Firebase', icon: 'firebase', slug: 'firebase'},
      { name: 'Underscore', icon: 'fa fa-minus one-half-em', slug: 'underscore'},
      { name: 'Express', icon: 'express', slug: 'express'},
      { name: 'Sass', icon: 'sass', slug: 'sass'},
      { name: 'Rails', icon: 'rails', slug: 'rails'},
      { name: 'PostgreSQL', icon: 'postgresql', slug: 'postgresql'},
      { name: 'Wordpress', icon: 'wordpress', slug: 'wordpress',},
      { name: 'Photoshop', icon: 'photoshop', slug: 'photoshop'},
      { name: 'Angular', icon: 'angular', slug: 'angular'},
      { name: 'jQuery', icon: 'jquery', slug: 'jquery'},
      { name: 'Bootstrap', icon: 'bootstrap', slug: 'bootstrap'},
      { name: 'CSS Preprocessors', icon: 'css3', slug: 'css'},
      { name: 'Web Socket', icon: 'websocket', slug: 'websocket'},
      { name: 'Browserify', icon: 'browserify', slug: 'browserify'},
      { name: 'Redux Observable', icon: 'reduxobservable', slug: 'reduxobservable' }
    ]
  }
}
