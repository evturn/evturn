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
          <div className={cx('nav')}>
            <Link to='/'><img src="dist/img/title-white.svg" /></Link>
          </div>
        ) : null}

        <div className={cx('burger', { home: page === 'home' })} onClick={toggleMenu}>
          <span className={'fa fa-bars'} />
        </div>

        <nav className={cx('menu', {'in': open, 'out': !open})}>
          <div className={cx('header')}>
            <div className={cx('close')} onClick={toggleMenu}>
              <img className="img" src={require('site-images/close-light.png')} />
            </div>
          </div>

          <ul className={cx('links')}>{nav.map((x, i) =>
            <li key={i} className={cx('item')} onClick={toggleMenu}>
              <Link to={x.route}>{x.name}</Link>
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