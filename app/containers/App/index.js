import React from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Home from 'containers/Home'
import Header from 'containers/Header'
import ProjectCard from 'containers/ProjectCard'
import css from './style.css'
import { projects } from './data'

export const App = props => {
  return (
    <Router>
      <div className={css.root}>
        <Header />
        <Match pattern='/' exactly component={Home} />
        <Match pattern='/projects' component={ProjectCards} />
      </div>
    </Router>
  )
}

const webProjects = projects.web.items
  .map(x => ({
    ...x,
    thumbnail: importImage(x.thumbnail)
  }))

const ProjectCards = props => {
  return (
    <div className={css.projects}>
      <div className={css.plank} />
      <div className={css.c0rdz}>
        {webProjects.map((x, i) =>
          <ProjectCard {...x} key={x.slug}  />
        )}
      </div>
    </div>
  )
}

function importImage(filename) {
  return require(`public/images/${filename}`)
}

export default App
