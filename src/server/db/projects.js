export default [
 {
    name: 'Drive Publishing',
    description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
    id: 1,
    slug: 'drive',
    links: [
      {
        url: 'http://drivepublishing.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/drivepublishing/drivepublishing.github.io',
        icon: 'fa fa-github'
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
    techIds: [1, 13, 14, 20]
  },{
    name: 'Marshallz Blog',
    description: `Built using React and Redux, this program continuously produces new content in the form of blog posts and tweets authored by bots. These bots are assigned their own API keys and destinations for scraping text various documents, such as news articles and washing machine manuals. Fragments of these sentences are collected and ran through a process creating a Markov Chain resulting nonsensical sentences. If the bot is publishing to the blog, content from these sentences are used to search Giphy and retrieve an image which is then included in the post.`,
    id: 2,
    slug: 'marshallz',
    links: [
      {
        url: 'http://marshallz.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/marshallz',
        icon: 'fa fa-github'
      }, {
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
    techIds: [1, 7, 19, 20, 10, 12, 13]
  },
  {
    name: 'Made In Music',
    description: `This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.`,
    id: 3,
    slug: 'mim',
    links: [
      {
        url: 'http://madeinmusic.co',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/madeinmusic.co',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: 'mim-tn.png',
    images: [
      'mim-1.png',
      'mim-2.png',
      'mim-3.png'
    ],
    featured: true,
    techIds: [1, 3, 14, 12, 10, 15, 20]
  }, {
    name: 'Brooklyn Friends School',
    description: `I collaborated in the development of the frontend builds that SM&KK Studios had designed for a complete refresh of the Brooklyn Friends School brand.`,
    id: 4,
    slug: 'bfs',
    links: [
      {
        url: 'http://smkkstudios.com/work/brooklynfriendsschool',
        icon: 'fa fa-link'
      }
    ],
    thumbnail: 'bfs-tn.jpg',
    images: [
      'bfs-1.png',
      'bfs-2.png',
      'bfs-3.png'
    ],
    featured: true,
    techIds: [21, 13]
  }, {
    name: 'Ramen Buffet',
    description: `Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.`,
    id: 5,
    slug: 'rb',
    links: [
      {
        url: 'http://ramenbuffet.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/ramen-buffet',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: 'rb-tn.png',
    images: [
      'ramen-buffet-1.png',
      'ramen-buffet-2.png',
      'ramen-buffet-3.png'
    ],
    featured: true,
    techIds: [1, 3, 14, 12, 10, 15, 18, 20]
  },{
    name: 'Slackbots',
    description: `A package designed to create instances of new Bots on Slack. The API is abstracted away from the user in order to easily create interactions with the team's channel. By extending Node's native Event Emitter, the bot is connected and notified of all chatroom activity.`,
    id: 6,
    slug: 'slackbots',
    links: [
      {
        url: 'https://github.com/faquet/bots/tree/api-init',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: 'bots-tn.png',
    images: [
      'bots-1.png',
      'bots-2.png'
    ],
    featured: true,
    techIds: [1, 14, 12]
  },{
    name: 'Pique',
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    id: 7,
    slug: 'pique',
    links: [
      {
        url: 'https://github.com/piqueapp/piqueapp.github.io',
        icon: 'fa fa-github'
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
  }, {
    name: 'WhereTO',
    description: `Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.`,
    id: 8,
    slug: 'whereto',
    links: null,
    thumbnail: 'whereto-tn.png',
    images: [
      'whereto-2.png',
      'whereto-1.png'
    ],
    featured: true,
    techIds: [1, 14, 12, 10, 13]
  }
];
