import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PageHeader from 'components/PageHeader'
import ProjectCard from 'components/ProjectCard'
import SVG from 'components/SVG'
import css from './style.css'

export class Software extends Component {
  render() {
    return (
      <div className={css.root}>
        <Helmet title='Software' meta={[
          {name: 'twitter:title', content: 'Software'},
          {property: 'og:title',  content: 'Software'},
        ]} />

        <PageHeader text='Software' />

        <div className={css.items}>
          {projects.map(x =>
            <ProjectCard
              {...x}
              key={x.slug}
              style={{backgroundColor: x.color}}
              className={css.item}>
              {x.links.map(x =>
                <div className={css.icon} key={x.href}>
                  <a href={x.href} target="_blank">
                    <SVG className={css.svg} name={x.icon} />
                  </a>
                </div>)}
            </ProjectCard>)}
        </div>
      </div>
    )
  }
}

const projects = [{
    name: 'Sentence Generator',
    description: `Transforms text input into a specified amount of newly generated sentences using a markov-chain.`,
    slug: 'sentence-generator',
    color: '#00ffec',
    links: [
      { href: 'https://github.com/evturn/sentence-generator', icon: 'code' },
      { href: 'https://www.npmjs.com/package/sentence-generator', icon: 'npm' }
    ]
  },{
    name: 'Meta Preserve',
    description: 'Preserves the creation date of images by replacing File metadata with Exif metadata.',
    slug: 'meta-preserve',
    color: '#00fdff',
    links: [
      { href: 'https://github.com/evturn/meta-preserve', icon: 'code' }
    ]
  },{
    name: 'Edit0r',
    description: `An editor for the browser that transforms text to markdown in real-time.`,
    color: '#00e7ff',
    slug: 'edit0r',
    links: [
      { href: 'https://github.com/evturn/edit0r', icon: 'code' }
    ]
  },{
    name: 'Object Iterable',
    description: `Enables iteration for non-iterable types, such as objects, by implementing the iterator protocol.`,
    slug: 'object-iterable',
    color: '#00d2ff',
    links: [
      { href: 'https://github.com/evturn/object-iterable', icon: 'code' },
      { href: 'https://www.npmjs.com/package/object-iterable', icon: 'npm' }
    ]
  },{
    name: 'Proto',
    description: `Copies properties from one object to another using prototypes without using the \`new\` operator and invoking a constructor call.`,
    slug: 'proto',
    color: '#00bdff',
    links: [
      { href: 'https://github.com/evturn/proto', icon: 'code' },
      { href: 'https://www.npmjs.com/package/@evturn/proto', icon: 'npm' }
    ]
  },{
    name: 'Slackbots',
    description: `Boilerplate for connecting to the Slack API and running a slackbot.`,
    slug: 'slackbots',
    color: `#00a8ff`,
    links: [
      { href: 'https://github.com/faquet/bots', icon: 'code' }
    ]
  },{
    name: 'Babel Preset',
    description: `Specified group of Babel plugins that transpile proposed and newly added language features to the JavaScript spec to backwards compatible versions.`,
    slug: 'babel-preset',
    color: '#0092ff',
    links: [
      { href: 'https://github.com/evturn/babel-preset-evturn', icon: 'code' },
      { href: 'https://www.npmjs.com/package/babel-preset-evturn', icon: 'npm' }
    ]
}]

export default Software