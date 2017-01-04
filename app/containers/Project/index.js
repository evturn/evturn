import React, { Component } from 'react'
import Link from 'react-router/Link'
import SVGIcon from 'components/Icons'
import css from './style.css'

export class Project extends Component {
  state = {
    enter: false,
    animation: window.innerWidth < 667 ? true : false,
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
    this.onEnter()
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto'
    clearTimeout(this.timeout)
  }

  onEnter = _ => {
    this.timeout = setTimeout(_ => this.setState({enter: true}), 50)
  }

  onLeave = _ => {
    this.setState({enter: false})
    this.timeout = this.state.animation
                 ? setTimeout(this.navigateBack, 300)
                 : this.navigateBack()
  }

  navigateBack = _ => {
    window.history.back()
  }

  render() {
    const { enter } = this.state
    const { name, shortDescription, tech, image, links } = this.props
    const imageURL = require(`public/images/${image}`)

    return (
      <div
        className={`${css.root} ${enter ? css.enter : ''}`}>
        <div className={css.project}>
          <div className={css.header}>
            <div className={css.window}>
              <div onClick={this.onLeave} className={css.close} />
              <div onClick={this.onLeave} className={css.min} />
              <div className={css.max} />
            </div>
            <h2 className={css.title}>{name}</h2>
          </div>

          <div className={css.body}>
            <div className={css.content}>
              <div className={css.description}>{shortDescription}</div>
              <div
                className={css.img}
                style={{backgroundImage: `url(${imageURL})` }} />

              <ul className={css.links}>
                {links.map(x =>
                  <li key={x.url} className={css.item}>
                    <a href={x.url} target="_blank">
                      <SVGIcon name={x.icon} className={css.link} />
                    </a>
                  </li>)}
              </ul>

              <ul className={css.ul}>
                {tech.map(x =>
                  <li key={x} className={css.li}>
                    <SVGIcon name={x} className={css.svg}>
                      {({ displayName }) =>
                        <div className={css.tech}>{displayName}</div>}
                    </SVGIcon>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        <Link to='/web' className={css.curtain} />
      </div>
    )
  }
}

export default Project