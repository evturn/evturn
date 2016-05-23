import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import { toggleMenu } from 'containers/App/actions'

import css from './style.less'

const cx = classNames.bind(css)

class Header extends Component {
  render() {
    const { page, nav, open, toggleMenu } = this.props

    return (
      <header>

        <div className={css.nav}>
          <div className={css.diamond} />
          <div className={css.logo}>
            <img src="src/assets/img/site/ev-av.svg" />
          </div>
        </div>
        <div className={css['sub-nav']} />

        <div className={cx('burger', { home: page === 'home' })} onClick={toggleMenu}>

        </div>

        <nav className={cx('menu', { 'in': open, 'out': !open })}>
          <ul className={css.links}>
            <li><span className="fa fa-times" /></li>
            {nav.map((x, i) =>
              <li key={i} className={css.items} onClick={toggleMenu}>
                <Link to={x.route}>{x.name}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.array,
  open: PropTypes.bool
}

const mapStateToProps = ({ site }) => ({
  page: site.page,
  pages: site.pages,
  open: site.open
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
