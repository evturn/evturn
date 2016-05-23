import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import Spinner from 'components/Spinner'
import Video from 'components/Video'

import css from 'less/containers/home.less'

const cx = classNames.bind(css)

class Home extends Component {
  render() {
    const { mobileNav } = this.props

    const mobile = (
      <div className={cx('sm')}>
        <img className={cx('av')} src={require('site-images/ev-av.png')} />
        <div className={cx('title')}>
          <img src="dist/img/title-white.svg" />
          <div className={cx('subtitle')} />
        </div>
        <ul className={cx('top')}>{mobileNav.map((x, i) =>
          <li key={i} className={cx('item')}>
            <Link to={x.route}>{x.name}</Link>
          </li>
        )}</ul>

        <div className={cx('overlay')} />
      </div>
    )

    const desktop = (
      <div className={cx('lg')}>

        <Video />
        <div className={cx('title')}>
          <img src="dist/img/title-white.svg" />
          <div className={cx('subtitle')} />
        </div>
      </div>
    )

    return (
      <div
        className={cx('root')}
        style={{backgroundImage: `url(${require('site-images/banana-plants.png')})`}}>
        {desktop}
        {mobile}
      </div>
    )
  }
}

//         <Spinner />
Home.propTypes = {
  mobileNav: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  mobileNav: site.mobileNav
})

export default connect(mapStateToProps)(Home)
