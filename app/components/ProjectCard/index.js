import React from 'react'
import css from './style.css'

export const ProjectCard = ({ style, copy, title, children }) => {
  return (
    <div className={css.root}>
      <div className={css.card}>

        <div className={css.art} style={style}>
          {children}
        </div>

        <div className={css.copy}>
          <div className={css.name}>{title}</div>
          <div className={css.border} />
          <div className={css.desc}>{copy}</div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard