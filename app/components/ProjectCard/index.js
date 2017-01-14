import React from 'react'
import Logo from 'components/SVG/theme/Logo'
import css from './style.css'

export const ProjectCard = ({ style={}, ...rest }) => {
  const header = rest.thumbnail
               ? {style: {backgroundImage: `url(${require(`public/images/${rest.thumbnail}`)})`}}
               : {children: <Logo className={css.logo} />}
  return (
    <div className={rest.className}>
      <div className={css.root}>
        <div
          style={style}
          {...header}
          title={rest.name}
          className={css.header} />

        <div className={css.copy}>
          <div className={css.title}>{rest.name}</div>
          <div className={css.desc}>{rest.description}</div>
        </div>

        <div className={css.footer}>
          {rest.children}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard