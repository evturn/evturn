import React, { Component } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import ProjectProfile from './ProjectProfile'
import Card from 'components/Card'
import css from './style.css'

class ProjectCards extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.plank} />
        <div className={css.header}>Web</div>
        <div className={css.c0rdz}>
          {projects.map((x, i) =>
            <Link
              to={`/web/${x.slug}`}
              key={x.slug}>
              <Card
                title={x.name}
                image={x.image}
                copy={x.shortDescription} />
            </Link>
          )}
        </div>
        <Match pattern='/web/:slug' render={props => {
          const project = projects.filter(x => x.slug === props.params.slug)[0]
          return <ProjectProfile {...props} {...project} />
        }} />
      </div>
    )
  }
}

function imageLoader(filename) {
  return require(`public/images/${filename}`)
}

const projects = [{
    name: 'Drive Publishing',
    shortDescription: `From legacy catalogs to new songwriters, Drive is more than an independent music publishing company.`,
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
    shortDescription: `A high-end weekly golfing magazine originally launched in 1975.`,
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
    shortDescription: `Founded in 1867 Brooklyn Friends School is one of the oldest continuously operating independent schools in New York City.`,
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
    shortDescription: `A leading global provider of cloud services for video enables marketers to create engaging video portal experiences.`,
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
    shortDescription: `Bot authored blog posts and twitter statuses continuously created by a long running program and a markov chain.`,
    description: `Built using React, Redux, and RxJS, this program continuously posts new content to the website in addition to posting on Twitter. Content for these posts are gathered anywhere from RSS feeds to online washing machine manuals.`,
    slug: 'marshallz',
    links: [
      {name: 'Website', url: 'http://marshallz.com', icon: 'chrome'},
      {name: 'Github', url: 'https://github.com/evturn/marshallz', icon: 'github'},
      {name: 'Twitter', url: 'http://twitter.com/marshallzBlog', icon: 'twitter'}
    ],
    thumbnail: 'marshallz-tn.png',
    images: ['marshallz-1.png', 'marshallz-2.png', 'marshallz-3.png'],
    tech: ['node', 'react', 'redux', 'firebase', 'rxjs', 'webpack', 'cssmodules', 'reduxobservable']
  },{
    name: 'Nutty Goodness',
    shortDescription: `All-natural solution for snaking and leading a healthier lifestyle.`,
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
    shortDescription: `Showcasing the human aspect of the journey to success, this weekly podcast delivers unfiltered conversations from honest perspectives.`,
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
    shortDescription: `A mapping of coordinates from earthquakes happening in real-time merged with a live stream of tweets in that area.`,
    description: `Displays a real-time list of earthquakes, including information about their locations, magnitudes, and dates. All data for the map and any earthquake comes through from the USGS. Using RxJS, a Reactive Extensions library, this stream of data is merged with another a WebSocket server that takes coordinates from earthquakes as they arrive and searches Twitter for tweet in that location.`,
    slug: 'gin-tectonic',
    links: [
      {name: 'Website', url: 'http://evturn.com/gin-tectonic', icon: 'chrome'},
      {name: 'Github', url: 'https://github.com/evturn/gin-tectonic', icon: 'github'}
    ],
    thumbnail: 'https://i.ytimg.com/vi/lz9VzshE0_4/hqdefault.jpg',
    thumbnail: 'tectonic-tn.png',
    images: ['tectonic-1.png', 'tectonic-2.png'],
    tech: ['node', 'rxjs', 'websocket', 'less', 'webpack']
  },{
    name: 'Made In Music',
    shortDescription: `From musicians, entertainers, and industry profressionals, Made In Music takes a weekly look at the music business from an insider's perspective.`,
    description: `Keystone.js, a Node based CMS, uses Express and MongoDB.`,
    slug: 'mim',
    links: [
      {name: 'Github', url: 'https://github.com/evturn/madeinmusic.co', icon: 'github'}
    ],
    thumbnail: 'mim-tn.png',
    images: ['mim-1.png', 'mim-2.png', 'mim-3.png'],
    tech: ['node', 'backbone', 'mongodb', 'gulp', 'less']
  },{
    name: 'Pique',
    shortDescription: `A place for professionals interested in working on new ideas and building a team.`,
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    slug: 'pique',
    links: [
      {name: 'Github', url: 'https://github.com/piqueapp/piqueapp.github.io', icon: 'github'}
    ],
    thumbnail: 'pique-tn.png',
    images: ['pique-1.png', 'pique-2.png', 'pique-3.png', 'pique-4.png'],
    tech : ['rails', 'postgresql']
}].map(x => ({...x, image: imageLoader(x.thumbnail)}))

export default ProjectCards