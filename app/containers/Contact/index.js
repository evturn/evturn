import React, { Component } from 'react'
import SVGIcon from 'components/Icons'
import css from './style.css'

export class Contact extends Component {
  static defaultProps = {
    links: [
      {url: 'http://github.com/evturn',           icon: 'code' },
      {url: 'mailto:evturn@gmail.com',            icon: 'email' },
    ]
  }

  render() {
    const { links } = this.props
    return (
      <div className={css.root}>
        <ul className={css.ul}>
          {links.map(x =>
            <li key={x.url} className={css.item}>
              <a href={x.url} className={css.link} target="_blank">
                <SVGIcon name={x.icon} className={css.svg} />
              </a>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default Contact
