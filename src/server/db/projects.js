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
    thumbnail: 'images/apps/drive-tn.png',
    images: [
      'images/apps/drive-1.png',
      'images/apps/drive-2.png',
      'images/apps/drive-3.png'
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
    thumbnail: 'images/apps/marshallz-tn.png',
    images: [
      'images/apps/marshallz-1.png',
      'images/apps/marshallz-2.png',
      'images/apps/marshallz-3.png',
      'images/apps/marshallz-4.png'
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
    thumbnail: 'images/apps/mim-tn.png',
    images: [
      'images/apps/mim-1.png',
      'images/apps/mim-2.png',
      'images/apps/mim-3.png'
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
    thumbnail: 'images/apps/bfs-tn.jpg',
    images: [
      'images/apps/bfs-1.png',
      'images/apps/bfs-2.png',
      'images/apps/bfs-3.png'
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
    thumbnail: 'images/apps/rb-tn.png',
    images: [
      'images/apps/ramen-buffet-1.png',
      'images/apps/ramen-buffet-2.png',
      'images/apps/ramen-buffet-3.png'
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
    thumbnail: 'images/apps/bots-tn.png',
    images: [
      'images/apps/bots-1.png',
      'images/apps/bots-2.png'
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
    thumbnail: 'images/apps/pique-tn.png',
    images: [
      'images/apps/pique-1.jpg',
      'images/apps/pique-2.png',
      'images/apps/pique-3.png',
      'images/apps/pique-4.png'
    ],
    featured: true,
    techIds : [16, 17]
  }, {
    name: 'WhereTO',
    description: `Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.`,
    id: 8,
    slug: 'whereto',
    links: null,
    thumbnail: 'images/apps/whereto-tn.png',
    images: [
      'images/apps/whereto-2.png',
      'images/apps/whereto-1.png'
    ],
    featured: true,
    techIds: [1, 14, 12, 10, 13]
  }
];
