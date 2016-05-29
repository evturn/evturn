export default [
  {
    name: 'Drive Publishing',
    description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
    id: 1,
    slug: 'drive',
    links: [
      {
        name: 'Website',
        url: 'http://drivepublishing.com',
        icon: 'fa fa-chrome'
      }, {
        name: 'Github',
        url: 'https://github.com/drivepublishing/drivepublishing.github.io',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'drive-tn.png',
    images: [
      'drive-1.png',
      'drive-2.png',
      'drive-3.png',
      'drive-4.png'
    ],
    featured: true,
    tech: ['node', 'gulp', 'sass']
  },{
    name: 'Marshallz Blog',
    description: `Built using React, Redux, and RxJS, this program continuously posts new content to the website in addition to posting on Twitter. Content for these posts are gathered anywhere from RSS feeds to online washing machine manuals.`,
    id: 2,
    slug: 'marshallz',
    links: [
      {
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
      }
    ],
    thumbnail: 'marshallz-tn.png',
    images: [
      'marshallz-1.png',
      'marshallz-2.png',
      'marshallz-3.png'
    ],
    featured: true,
    tech: ['node', 'react', 'redux', 'mongodb', 'rxjs', 'webpack', 'less']
  },{
    name: 'Nutty Goodness',
    description: 'Led by New York City based product design and development shop Born & Raised for health snack producer, Nutty Goodness.',
    id: 3,
    slug: 'nutty-goodness',
    links: [
      {
        name: 'Website',
        url: 'http://nuttygoodness.com',
        icon: 'fa fa-chrome'
      },{
        name: 'B&R',
        url: 'http://wearebnr.com',
        icon: 'fa fa-circle-o'
      }
    ],
    thumbnail: 'ng-tn.png',
    images: [
      'ng-1.png',
      'ng-2.png',
      'ng-3.png',
      'ng-4.png',
      'ng-5.png'
    ],
    featured: true,
    tech: ['node', 'gulp', 'less']

  },{
    name: 'Golfweek',
    description: 'A complete rebuild of Golfweek.com which included a customized CMS. Designed and built by New York City based product design and development shops Born & Raised and Gigareef.',
    id: 4,
    slug: 'golfweek',
    links: [
      {
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
      }
    ],
    thumbnail: 'gw-tn.png',
    images: [
      'gw-1.png',
      'gw-2.png'
    ],
    featured: true,
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
    featured: true,
    tech: ['wordpress', 'sass']
  },{
    name: 'Mama We Made It',
    description: `A 'Universal' React application custom CMS. All data is sent upon inital load with the app rendering on both the server and client side.`,
    id: 6,
    slug: 'mwmi',
    links: [
      {
        name: 'Website',
        url: 'http://mamawemadeit.com',
        icon: 'fa fa-chrome'
      }, {
        name: 'Github',
        url: 'https://github.com/evturn/mwmi',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'mwmi-tn.png',
    images: [
      'mwmi-1.png',
      'mwmi-2.png'
    ],
    featured: true,
    tech: ['node', 'react', 'rxjs', 'redux', 'webpack', 'mongodb']
  },{
    name: 'Tectonic',
    description: `Displays a real-time list of earthquakes, including information about their locations, magnitudes, and dates. All data for the map and any earthquake comes through from the USGS. Using RxJS, a Reactive Extensions library, this stream of data is merged with another a WebSocket server that takes coordinates from earthquakes as they arrive and searches Twitter for tweet in that location.`,
    id: 7,
    slug: 'gin-tectonic',
    links: [
      {
        name: 'Website',
        url: 'http://evturn.com/gin-tectonic',
        icon: 'fa fa-chrome'
      }, {
        name: 'Github',
        url: 'https://github.com/evturn/gin-tectonic',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'tectonic-tn.png',
    images: [
      'tectonic-1.png',
      'tectonic-2.png'
    ],
    featured: true,
    tech: ['node', 'rxjs', 'web-socket', 'less', 'webpack']
  },{
    name: 'Made In Music',
    description: `Keystone.js, a Node based CMS, uses Express and MongoDB.`,
    id: 8,
    slug: 'mim',
    links: [
      {
        name: 'Website',
        url: 'http://madeinmusic.co',
        icon: 'fa fa-chrome'
      }, {
        name: 'Github',
        url: 'https://github.com/evturn/madeinmusic.co',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'mim-tn.png',
    images: [
      'mim-1.png',
      'mim-2.png',
      'mim-3.png'
    ],
    featured: true,
    tech: ['node', 'backbone', 'mongodb', 'gulp', 'less']
  },{
    name: 'Pique',
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    id: 9,
    slug: 'pique',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/piqueapp/piqueapp.github.io',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'pique-tn.png',
    images: [
      'pique-1.png',
      'pique-2.png',
      'pique-3.png',
      'pique-4.png'
    ],
    featured: true,
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
    featured: true,
    tech: ['node', 'mongodb', 'sass']
  },{
    name: 'Ramen Buffet',
    description: `Manage multiple lists of tasks or todos. Lists can be sorted by importance, priority, or status.`,
    id: 11,
    slug: 'ramen-buffet',
    links: [
      {
        name: 'Website',
        url: 'http://ramenbuffet.com',
        icon: 'fa fa-chrome'
      }, {
        name: 'Github',
        url: 'https://github.com/evturn/ramen-buffet',
        icon: 'fa fa-github-square'
      }
    ],
    thumbnail: 'rb-tn.png',
    images: [
      'ramen-buffet-1.png',
      'ramen-buffet-2.png',
      'ramen-buffet-3.png'
    ],
    featured: true,
    tech: ['node', 'backbone', 'mongodb', 'handlebars', 'less']
  }
]
