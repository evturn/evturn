import React, { Component } from 'react'

import css from './style.css'

export default ({ tech, links, name, id, description }) => {
  const projectLinks = links ? (
    <ul className={css.links}>{links.map((x, i)=>
      <li key={i} className={css.item}>
        <a className={css.ext} href={x.url} target="_blank"><span className={x.icon} /></a>
        <div className={css.caption}>{x.name}</div>
      </li>
    )}</ul>
  ) : null

  const projectTech = (
    <ul className={css.tech}>{tech.map((x, i) =>
      <li key={i} className={css.item}>
        <span className={x.icon} />
        <div className={css.caption}>{x.name}</div>
      </li>
    )}</ul>
  )

  return (
    <div className={css.root}>
      <div className={css.name}>{name}</div>
      <div className={css.desc}>{description}</div>
      {projectLinks}
      {projectTech}
    </div>
  )
}
