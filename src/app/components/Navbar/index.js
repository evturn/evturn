import React from 'react'
import { Link } from 'react-router'

import Logo from 'components/Logo'

import css from './style.css'

export default ({ nav, ready, mobile, initialized, notRoot }) => (
  <div className={css.root}>

    <div className={css.pages}>{nav.map((x, i) =>
      <div key={i} className={css.page}>
        <Link
          to={x.route}
          children={x.name}
        />
      </div>
    )}</div>

    <Logo
      ready={ready}
      mobile={mobile}
      notRoot={notRoot}
      initialized={initialized}
    />

    <div className={css.diamond} />
  </div>
)
