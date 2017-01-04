import React, { Component } from 'react'
import Link from 'react-router/Link'
import SVGIcon from 'components/Icons'
import css from './style.css'

export class WebProject extends Component {

  state = {origin: 0, y: 0, style: {}, transition: ''}

  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    document.body.style.overflow = 'auto'
  }

  handleTouchStart = ({ targetTouches: [ e ] }) => {
    this.setState({transition: '', origin: e.clientY})
  }

  handleTouchMove = ({ targetTouches: [ e ] }) => {
    const distance = e.clientY - this.state.origin
    const top = distance >= 0 ? distance : 0
    this.setState({style: {top: `${top}px`}, y: e.clientY})
  }

  handleTouchEnd = ({ targetTouches: [ e ] }) => {
    const { origin, y } = this.state
    const transition = y - origin > 150 ? true : false
    this.setState({ transition, style: {}, origin: 0, y: 0 })
  }

  navigateBack = _ => {
    this.timeout = setTimeout(_ => window.history.back(), 300)
  }

  updateCSS = transition => {
    switch (transition) {
      case true:
        return css.dismiss
      case false:
        return css.remain
      case '':
      default:
        return ''
    }
  }

  render() {
    const { style, transition } = this.state
    const { name, shortDescription, tech, image, links } = this.props
    const imageURL = require(`public/images/${image}`)

    if (transition) {
      this.navigateBack()
    }

    return (
      <div
        style={style}
        className={`${css.root} ${this.updateCSS(transition)}`}>
        <div
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          className={css.project}>

          <div className={css.window}>
            <Link to='/web'>
              <div className={css.close} />
            </Link>
            <div className={css.min} />
            <div className={css.max} />
          </div>

          <div className={css.header}>
            <h2 className={css.name}>{name}</h2>
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
                    <SVGIcon name={x.icon} className={css.link} />
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

export default WebProject