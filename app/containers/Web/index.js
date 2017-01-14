import React, { Component, PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import LazyLoad, { importDefault } from 'containers/LazyLoad'
import AsyncRoute from 'components/AsyncRoute'
import MoreIcon from 'components/SVG/icons/More'
import PageHeader from 'components/PageHeader'
import ProjectCard from 'components/ProjectCard'
import css from './style.css'

export class Web extends Component {
  state = {project: null}

  componentDidMount() {
    this.getProjectBySlug(this.props.location)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query !== nextProps.location.query) {
      this.getProjectBySlug(nextProps.location)
    }
  }

  getProjectBySlug = ({ query }) => {
    if (query && query.slug) {
      const project = projects
        .filter(x => x.slug === query.slug)[0]
      this.setState({ project })
    } else {
      this.setState({project: null})
    }
  }

  removeProject = _ => {
    this.props.router.transitionTo('/web')
  }

  render() {
    const { project } = this.state
    return (
      <div className={css.root}>
        <PageHeader text='Web' />

        <div className={css.items}>
          {projects.map(x =>
            <ProjectCard
              {...x}
              key={x.slug}
              className={css.item}>
              <Link
                to={{ pathname: '/web', query: {slug: x.slug}}}
                className={css.more}>
                  <MoreIcon className={css.svg} />
              </Link>
            </ProjectCard>)}
        </div>

        {!!project
          ? <AsyncRoute
              {...project}
              pattern='/'
              onClose={this.removeProject}
              component={_ => importDefault(import('containers/Project'))} />
          : null}
      </div>
    )
  }
}

const projects = [{
    name: 'Get Pique',
    description: `Pique is a 500 Startups portfolio company. Based in Silicon Valley, 500 Startups manages $200M in assets and has invested in over 1,300 tech startups.`,
    slug: 'getpique',
    links: [
      {name: 'Website', url: 'http://getpique.co/', icon: 'launch'},
      {name: 'Github', url: 'https://github.com/pique-developer/pique-developer.github.io', icon: 'code'}
    ],
    thumbnail: 'getpique-tn.png',
    image: 'getpique-1.png',
    tech: ['node', 'webpack', 'react', 'redux', 'firebase']
  },{
    name: 'Brooklyn Friends School',
    description: `Founded in 1867 Brooklyn Friends School is one of the oldest continuously operating independent schools in New York City.`,
    slug: 'bfs',
    links: [
      {name: 'Website', url: 'http://brooklynfriends.org/', icon: 'launch'},
      {name: 'SM&KK', url: 'http://smkkstudios.com/work/brooklynfriendsschool', icon: 'company'}
    ],
    thumbnail: 'bfs-tn.png',
    image: 'bfs-1.png',
    tech: ['wordpress', 'sass', 'jquery']
  },{
    name: 'Drive Publishing',
    description: `From legacy catalogs to new songwriters, Drive is more than an independent music publishing company.`,
    slug: 'drive',
    links: [
      {name: 'Website', url: 'http://drivepublishing.com', icon: 'launch'},
      {name: 'Github', url: 'https://github.com/drivepublishing/drivepublishing.github.io', icon: 'code'}
    ],
    thumbnail: 'drive-tn.png',
    image: 'drive-1.png',
    tech: ['node', 'gulp', 'sass']
  },{
    name: 'Mama We Made It',
    description: `Showcasing the human aspect of the journey to success, this weekly podcast delivers unfiltered conversations from honest perspectives.`,
    slug: 'mwmi',
    links: [
      {name: 'Website', url: 'http://mamawemadeit.com', icon: 'launch'},
      {name: 'Github', url: 'https://github.com/evturn/mwmi', icon: 'code'}
    ],
    thumbnail: 'mwmi-tn.png',
    image: 'mwmi-1.png',
    tech: ['node', 'react', 'rxjs', 'redux', 'webpack', 'mongodb']
  },{
    name: 'Brightcove Gallery',
    description: `A leading global provider of cloud services for video enables marketers to create engaging video portal experiences.`,
    slug: 'brightcove-gallery',
    links: [
      {name: 'Website', url: 'https://brightcove.com/en/gallery', icon: 'launch'}
    ],
    thumbnail: 'bc-tn.png',
    image: 'bc-1.png',
    tech: ['node', 'handlebars', 'mongodb', 'less', 'jquery', 'react']
  },{
    name: 'GenFKD',
    description: `Founded in 2013 as a financial literacy organization, GenFKD is growing into an organization that’s revolutionizing American higher education.`,
    slug: 'genfkd',
    links: [
      {name: 'Website', url: 'http://genfkd.org/', icon: 'launch'},
      {name: 'Gigareef', url: 'http://gigareef.com', icon: 'company'}
    ],
    thumbnail: 'genfkd-tn.png',
    image: 'genfkd-1.png',
    tech: ['wordpress', 'gulp', 'less', 'jquery']
  },{
    name: 'Marshallz Blog',
    description: `Bot authored blog posts and twitter statuses continuously created by a long running program and a markov chain.`,
    slug: 'marshallz',
    links: [
      {name: 'Website', url: 'http://marshallz.com', icon: 'launch'},
      {name: 'Github', url: 'https://github.com/evturn/marshallz', icon: 'code'},
      {name: 'Twitter', url: 'http://twitter.com/marshallzBlog', icon: 'twitter'}
    ],
    thumbnail: 'marshallz-tn.png',
    image: 'marshallz-1.png',
    tech: ['node', 'react', 'redux', 'firebase', 'rxjs', 'webpack', 'cssmodules', 'reduxobservable']
  },{
    name: 'Golfweek',
    description: `A high-end weekly golfing magazine originally launched in 1975.`,
    slug: 'golfweek',
    links: [
      {name: 'Website', url: 'http://golfweek.com', icon: 'launch'},
      {name: 'Gigareef', url: 'http://gigareef.com', icon: 'company'}
    ],
    thumbnail: 'gw-tn.png',
    image: 'gw-1.png',
    tech: ['wordpress', 'gulp', 'less']
  },{
    name: 'Nutty Goodness',
    description: `All-natural solution for snaking and leading a healthier lifestyle.`,
    slug: 'nutty-goodness',
    links: [
      {name: 'Website', url: 'http://nuttygoodness.com', icon: 'launch'},
      {name: 'B&R', url: 'http://wearebnr.com', icon: 'company'}
    ],
    thumbnail: 'ng-tn.png',
    image: 'ng-1.png',
    tech: ['node', 'gulp', 'less']
  },{
    name: 'Tectonic',
    description: `A mapping of coordinates from earthquakes happening in real-time merged with a live stream of tweets in that area.`,
    slug: 'gin-tectonic',
    links: [
      {name: 'Website', url: 'http://evturn.com/gin-tectonic', icon: 'launch'},
      {name: 'Github', url: 'https://github.com/evturn/gin-tectonic', icon: 'code'}
    ],
    thumbnail: 'tectonic-tn.png',
    image: 'tectonic-1.png',
    tech: ['node', 'rxjs', 'websocket', 'less', 'webpack']
  },{
    name: 'Made In Music',
    description: `From musicians, entertainers, and industry profressionals, Made In Music takes a weekly look at the music business from an insider's perspective.`,
    slug: 'mim',
    links: [
      {name: 'Github', url: 'https://github.com/evturn/madeinmusic.co', icon: 'code'}
    ],
    thumbnail: 'mim-tn.png',
    image: 'mim-1.png',
    tech: ['node', 'backbone', 'mongodb', 'gulp', 'less']
  },{
    name: 'Pique',
    description: `Pique is an app for professionals interested in networking, collaborating on new ideas, and building a team.`,
    slug: 'pique',
    links: [
      {name: 'Github', url: 'https://github.com/piqueapp/piqueapp.github.io', icon: 'code'}
    ],
    thumbnail: 'pique-tn.png',
    image: 'pique-1.png',
    tech : ['rails', 'postgresql']
}]

export default Web