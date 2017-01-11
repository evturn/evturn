import React, { Component } from 'react'
import Link from 'react-router/Link'
import SVG from 'components/SVG'
import Curtain from 'components/Curtain'
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
    this.props.onClose()
  }

  render() {
    const { enter } = this.state
    const { name, description, tech, image, links } = this.props

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

            <div className={css.banner}>
              <h2 className={css.title}>{name}</h2>
            </div>
          </div>

          <div className={css.body}>
            <div className={css.content}>
              <div className={css.description}>{description}</div>
              <div
                className={css.img}
                style={{backgroundImage: `url(${require(`public/images/${image}`)})` }} />

              <ul className={css.links}>
                {links.map(x =>
                  <li key={x.url} className={css.item}>
                    <a href={x.url} target="_blank">
                      <SVG name={x.icon} className={css.link} />
                    </a>
                  </li>)}
              </ul>

              <ul className={css.ul}>
                {tech.map(x =>
                  <li key={x} className={css.li}>
                    <SVG name={x} className={css.svg}>
                      {({ displayName }) =>
                        <div className={css.tech}>{displayName}</div>}
                    </SVG>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        <Curtain onClick={this.onLeave} className={css.curtain} />
      </div>
    )
  }
}

export default Project