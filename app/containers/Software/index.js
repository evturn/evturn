import React, { Component } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import ProjectCard from 'components/ProjectCard'
import Logo from 'components/Logo'
import css from './style.css'

class Software extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>Software</div>
        <div className={css.c0rdz}>
          {projects.map((x, i) =>
            <ProjectCard
              key={x.slug}
              title={x.name}
              style={{backgroundColor: x.color}}
              copy={x.description}>
              <Logo className={css.logo} />
            </ProjectCard>
          )}
        </div>
      </div>
    )
  }
}

const projects = [{
    name: 'Object Iterable',
    description: `Enables iteration for non-iterable types, such as objects, by implementing the iterator protocol.`,
    slug: 'object-iterable',
    color: '#00ffec',
    links: [
      { url: 'https://github.com/evturn/object-iterable', icon: 'github' },
      { url: 'https://www.npmjs.com/package/object-iterable', icon: 'npm' }
    ]
  },{
    name: 'Meta Preserve',
    description: 'Preserves the creation date of images by replacing File metadata with Exif metadata.',
    slug: 'meta-preserve',
    color: '#00fdff',
    links: [
      { url: 'https://github.com/evturn/meta-preserve', icon: 'github' }
    ]
  },{
    name: 'Proto',
    description: `Copies properties from one object to another using prototypes without using the \`new\` operator and invoking a constructor call.`,
    slug: 'proto',
    color: '#00e7ff',
    links: [
      { url: 'https://github.com/evturn/proto', icon: 'github' },
      { url: 'https://www.npmjs.com/package/@evturn/proto', icon: 'npm' }
    ]
  },{
    name: 'Sentence Generator',
    description: `Transforms text input into a specified amount of newly generated sentences using a markov-chain.`,
    slug: 'sentence-generator',
    color: '#00d2ff',
    links: [
      { url: 'https://github.com/evturn/sentence-generator', icon: 'github' },
      { url: 'https://www.npmjs.com/package/sentence-generator', icon: 'npm' }
    ]
  },{
    name: 'Slackbots',
    description: `Boilerplate for connecting to the Slack API and running a slackbot.`,
    slug: 'slackbots',
    color: '#00bdff',
    links: [
      { url: 'https://github.com/faquet/bots', icon: 'github' }
    ]
  },{
    name: 'Babel Preset',
    description: `Specified group of Babel plugins that transpile proposed and newly added language features to the JavaScript spec to backwards compatible versions.`,
    slug: 'babel-preset',
    color: '#00a8ff',
    links: [
      { url: 'https://github.com/evturn/babel-preset-evturn', icon: 'github' },
      { url: 'https://www.npmjs.com/package/babel-preset-evturn', icon: 'npm' }
    ]
}]

export default Software