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
    techIds: [1]
  },{
    name: 'Marshallz Blog',
    description: `Built using React and Redux, this program continuously produces new content in the form of blog posts and tweets authored by bots. These bots are assigned their own API keys and destinations for scraping text various documents, such as news articles and washing machine manuals. Fragments of these sentences are collected and run through a process creating a Markov Chain resulting nonsensical sentences. If the bot is publishing to the blog, content from these sentences is used to search Giphy and retrieve an image which is then included in the post.`,
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
      'marshallz-3.png',
      'marshallz-4.png'
    ],
    featured: true,
    techIds: [1, 7, 10]
  },{
    name: 'Nutty Goodness',
    description: 'Nutty Goodness is a producer of healthy snacks made from all-natural fruit & nuts. I developed a brand new website for the company which was led by New York City based product design and development shop Born & Raised.',
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
    techIds: [14]

  },{
    name: 'Brooklyn Friends School',
    description: `I collaborated in the development of the frontend builds that SM&KK Studios had designed for a complete refresh of the Brooklyn Friends School brand.`,
    id: 4,
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
    thumbnail: 'bfs-tn.jpg',
    images: [
      'bfs-1.png',
      'bfs-2.png',
      'bfs-3.png'
    ],
    featured: true,
    techIds: [21]
  },{
    name: 'Pique',
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    id: 5,
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
      'pique-1.jpg',
      'pique-2.png',
      'pique-3.png',
      'pique-4.png'
    ],
    featured: true,
    techIds : [16, 17]
  },{
    name: 'Made In Music',
    description: `This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.`,
    id: 6,
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
    techIds: [1, 3, 10]
  },{
    name: 'Where TO',
    description: `Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.`,
    id: 7,
    slug: 'where-to',
    links: null,
    thumbnail: 'whereto-tn.png',
    images: [
      'whereto-2.png',
      'whereto-1.png'
    ],
    featured: true,
    techIds: [1, 10]
  },{
    name: 'Ramen Buffet',
    description: `Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.`,
    id: 8,
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
    techIds: [1, 3, 10, 18]
  }
];
