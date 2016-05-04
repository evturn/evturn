import React, { Component } from 'react'
import classNames from 'classnames/bind'
import css from 'less/components/work-web.less'

const cx = classNames.bind(css)

export default class WorkWebDetails extends Component {
  render() {
    const { tech, links, name, id, description } = this.props

    const projectLinks = links ? (
      <ul className={cx('links')}>{links.map(x =>
        <li key={x.url} className={cx('item')}>
          <a href={x.url} target="_blank"><span className={x.icon} /></a>
          <div className={cx('title')}>{x.name}</div>
        </li>
      )}</ul>
    ) : null

    const projectTech = (
      <ul className={cx('tech')}>{tech.map(x =>
        <li key={x.name} className={cx('item')}>
          <span className={x.icon} />
          <div className={cx('title')}>{x.name}</div>
        </li>
      )}</ul>
    )

    return (
      <div className={cx('detail')}>
        <div className={cx('name')}>{name}</div>
        <div className={cx('desc')}>{description}</div>
        {projectLinks}
        {projectTech}
      </div>
    )
  }
}