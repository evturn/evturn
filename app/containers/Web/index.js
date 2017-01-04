import React, { Component, Children } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import MoreIcon from 'components/Icons/More'
import PageHeader from 'components/PageHeader'
import ProjectCards from 'components/ProjectCards'
import css from './style.css'

export class Web extends Component {

  getProjectBySlug({ params: { slug } }) {
    return projects.filter(x => x.slug === slug)[0]
  }

  render() {
    const { children } = this.props
    return (
      <div className={css.root}>
        <PageHeader text='Web' />

        <ProjectCards items={projects.map(x => ({
            key: x.slug,
            title: x.name,
            style: {backgroundImage: `url(${require(`public/images/${x.thumbnail}`)})`},
            copy: x.shortDescription,
            children: <Link
              to={`/web/${x.slug}`}
              className={css.more}>
                <MoreIcon className={css.svg} />
              </Link>
          }))
        } />

        <Match pattern='/web/:slug' render={props => {
          const project = this.getProjectBySlug(props)
          return Children.only(children(project))
        }} />
      </div>
    )
  }
}

const projects = [{
    name: 'Drive Publishing',
    shortDescription: `From legacy catalogs to new songwriters, Drive is more than an independent music publishing company.`,
    description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
    slug: 'drive',
    links: [
      {name: 'Website', url: 'http://drivepublishing.com', icon: 'web'},
      {name: 'Github', url: 'https://github.com/drivepublishing/drivepublishing.github.io', icon: 'code'}
    ],
    thumbnail: 'drive-tn.png',
    image: 'drive-1.png',
    tech: ['node', 'gulp', 'sass']
  },{
    name: 'Brooklyn Friends School',
    shortDescription: `Founded in 1867 Brooklyn Friends School is one of the oldest continuously operating independent schools in New York City.`,
    description: `SM&KK Studios designed a complete refresh of the Brooklyn Friends School brand.`,
    slug: 'bfs',
    links: [
      {name: 'Website', url: 'http://brooklynfriends.org/', icon: 'web'},
      {name: 'SM&KK', url: 'http://smkkstudios.com/work/brooklynfriendsschool', icon: 'business'}
    ],
    thumbnail: 'bfs-tn.png',
    image: 'bfs-1.png',
    tech: ['wordpress', 'sass']
  },{
    name: 'Brightcove Gallery',
    shortDescription: `A leading global provider of cloud services for video enables marketers to create engaging video portal experiences.`,
    description: `The Brightcove Gallery is a video portal and CMS for product showcases, live events, and internal communications. I developed half a dozen customizable site templates that also give users the ability to customize colors and designs.`,
    slug: 'brightcove-gallery',
    links: [
      {name: 'Website', url: 'https://brightcove.com/en/gallery', icon: 'web'}
    ],
    thumbnail: 'bc-tn.png',
    image: 'bc-1.png',
    tech: ['node', 'handlebars', 'mongodb', 'less', 'jquery', 'react']
  },{
    name: 'Marshallz Blog',
    shortDescription: `Bot authored blog posts and twitter statuses continuously created by a long running program and a markov chain.`,
    description: `Built using React, Redux, and RxJS, this program continuously posts new content to the website in addition to posting on Twitter. Content for these posts are gathered anywhere from RSS feeds to online washing machine manuals.`,
    slug: 'marshallz',
    links: [
      {name: 'Website', url: 'http://marshallz.com', icon: 'web'},
      {name: 'Github', url: 'https://github.com/evturn/marshallz', icon: 'code'},
      {name: 'Twitter', url: 'http://twitter.com/marshallzBlog', icon: 'twitter'}
    ],
    thumbnail: 'marshallz-tn.png',
    image: 'marshallz-1.png',
    tech: ['node', 'react', 'redux', 'firebase', 'rxjs', 'webpack', 'cssmodules', 'reduxobservable']
  },{
    name: 'Golfweek',
    shortDescription: `A high-end weekly golfing magazine originally launched in 1975.`,
    description: 'A complete rebuild of Golfweek.com which included a customized CMS. Designed and built by New York City based product design and development shop Gigareef.',
    slug: 'golfweek',
    links: [
      {name: 'Website', url: 'http://golfweek.com', icon: 'web'},
      {name: 'Gigareef', url: 'http://gigareef.com', icon: 'business'}
    ],
    thumbnail: 'gw-tn.png',
    image: 'gw-1.png',
    tech: ['wordpress', 'gulp', 'less']
  },{
    name: 'Nutty Goodness',
    shortDescription: `All-natural solution for snaking and leading a healthier lifestyle.`,
    description: 'Led by New York City based product design and development shop Born & Raised for health snack producer, Nutty Goodness.',
    slug: 'nutty-goodness',
    links: [
      {name: 'Website', url: 'http://nuttygoodness.com', icon: 'web'},
      {name: 'B&R', url: 'http://wearebnr.com', icon: 'business'}
    ],
    thumbnail: 'ng-tn.png',
    image: 'ng-1.png',
    tech: ['node', 'gulp', 'less']
  },{
    name: 'Mama We Made It',
    shortDescription: `Showcasing the human aspect of the journey to success, this weekly podcast delivers unfiltered conversations from honest perspectives.`,
    description: `A 'Universal' React application custom CMS. All data is sent upon inital load with the app rendering on both the server and client side.`,
    slug: 'mwmi',
    links: [
      {name: 'Website', url: 'http://mamawemadeit.com', icon: 'web'},
      {name: 'Github', url: 'https://github.com/evturn/mwmi', icon: 'code'}
    ],
    thumbnail: 'mwmi-tn.png',
    image: 'mwmi-1.png',
    tech: ['node', 'react', 'rxjs', 'redux', 'webpack', 'mongodb']
  },{
    name: 'Tectonic',
    shortDescription: `A mapping of coordinates from earthquakes happening in real-time merged with a live stream of tweets in that area.`,
    description: `Displays a real-time list of earthquakes, including information about their locations, magnitudes, and dates. All data for the map and any earthquake comes through from the USGS. Using RxJS, a Reactive Extensions library, this stream of data is merged with another a WebSocket server that takes coordinates from earthquakes as they arrive and searches Twitter for tweet in that location.`,
    slug: 'gin-tectonic',
    links: [
      {name: 'Website', url: 'http://evturn.com/gin-tectonic', icon: 'web'},
      {name: 'Github', url: 'https://github.com/evturn/gin-tectonic', icon: 'code'}
    ],
    thumbnail: 'tectonic-tn.png',
    image: 'tectonic-1.png',
    tech: ['node', 'rxjs', 'websocket', 'less', 'webpack']
  },{
    name: 'Made In Music',
    shortDescription: `From musicians, entertainers, and industry profressionals, Made In Music takes a weekly look at the music business from an insider's perspective.`,
    description: `Keystone.js, a Node based CMS, uses Express and MongoDB.`,
    slug: 'mim',
    links: [
      {name: 'Github', url: 'https://github.com/evturn/madeinmusic.co', icon: 'code'}
    ],
    thumbnail: 'mim-tn.png',
    image: 'mim-1.png',
    tech: ['node', 'backbone', 'mongodb', 'gulp', 'less']
  },{
    name: 'Pique',
    shortDescription: `A place for professionals interested in working on new ideas and building a team.`,
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    slug: 'pique',
    links: [
      {name: 'Github', url: 'https://github.com/piqueapp/piqueapp.github.io', icon: 'code'}
    ],
    thumbnail: 'pique-tn.png',
    image: 'pique-1.png',
    tech : ['rails', 'postgresql']
}]

export default Web