import React, { Component } from 'react'
import Link from 'react-router/Link'
import SVGIcon from 'components/Icons'
import css from './style.css'

export class ProjectProfile extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto'
  }

  render() {
    const { name, description, tech, images } = this.props
    return (
      <div className={css.root}>
        <div className={css.project}>
          <div className={css.name}>{name}</div>
          <div className={css.description}>{description}</div>
          <div
            className={css.img}
            style={{backgroundImage: `url(${require(`public/images/${images[0]}`)})` }} />
          <div className={css.tech}>
            <ul className={css.ul}>
              {tech.map(x =>
                <li key={x} className={css.li}>
                  <SVGIcon className={css.icon} name={x} />
                </li>
              )}
            </ul>
          </div>
        </div>
        <Link to='/web' className={css.curtain} />
      </div>
    )
  }
}

export default ProjectProfile
