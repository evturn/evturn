import React from 'react'
import Logo from 'components/Logo'
import css from './style.css'

export const ProjectCards = ({ items=[], ...rest }) => {
  return (
    <div className={css.root}>
      {items.map(x => <ProjectCard {...x} {...rest } />)}
    </div>
  )
}

export const ProjectCard = ({ style={}, copy, title, children }) => {
  return (
    <div className={css.item}>
      <div className={css.card}>

        <div className={css.art} style={style}>
          {!style.backgroundImage ? <Logo className={css.logo} /> : null }
        </div>

        <div className={css.copy}>
          <div className={css.title}>{title}</div>
          <div className={css.desc}>{copy}</div>
        </div>

        <div className={css.footer}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default ProjectCards