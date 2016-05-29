import React, { Component } from 'react'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default ({ tech, links, name, id, description }) => {
  const projectLinks = links ? (
    <ul className={cx('links')}>{links.map((x, i)=>
      <li key={i} className={cx('item')}>
        <a href={x.url} target="_blank"><span className={x.icon} /></a>
        <div className={cx('title')}>{x.name}</div>
      </li>
    )}</ul>
  ) : null

  const projectTech = (
    <ul className={cx('tech')}>{tech.map((x, i) =>
      <li key={i} className={cx('item')}>
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
