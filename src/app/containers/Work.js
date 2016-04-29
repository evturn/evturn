import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'
import css from 'less/containers/work.less'

const cx = classNames.bind(css)

class Work extends Component {
  render() {
    const { nav } = this.props

    const workPageNav = (
      <ul className={cx('categories')}>{nav.map(x =>
        <li key={x.title} className={cx('item')}>
          <Link to={x.route} activeClassName={cx('active')}>
            <span className={x.icon} />
            <div className={cx('title')}>{x.title}</div>
          </Link>
        </li>
      )}</ul>
    )

    return (
      <div className={cx('page')}>
        {workPageNav}
        {this.props.children}
      </div>
    )
  }
}

Work.propTypes = {
  nav: PropTypes.array,
  params: PropTypes.object
}

export default connect(
  state => ({
    nav: state.site.work.nav
  })
)(Work)