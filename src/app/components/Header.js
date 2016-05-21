import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import { toggleMenu } from 'actions/site'
import classNames from 'classnames/bind'
import css from 'less/components/site-header.less'

const cx = classNames.bind(css)

class Header extends Component {
  render() {
    const { page, nav, open } = this.props

    return (
      <header>
        {page !== 'home' ? (
          <div className={cx('navbar')}>
            <Link to="/">
              <img className={cx('image')} src="dist/img/title-white.svg" />
            </Link>
          </div>
        ) : null}

        <div className={cx('navbar-burger', page)} onClick={toggleMenu}>
          <span className={'fa fa-bars'} />
        </div>

        <nav className={cx('menu', {'in': open, 'out': !open})}>
          <div className={cx('menu-header')}>
            <div className={cx('close')} onClick={toggleMenu}>
              <img className="img" src={require('site-images/close-light.png')} />
            </div>
          </div>

          <ul className={cx('menu-links')}>{nav.map(item =>
            <li key={item.id} className={cx('item')} onClick={toggleMenu}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          )}</ul>

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

export default connect(
  state=> ({
    page: state.site.page,
    pages: state.site.pages,
    open: state.site.open
  })
)(Header)