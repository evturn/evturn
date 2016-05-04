import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import Spinner from 'components/Spinner'
import Video from 'components/Video'
import classNames from 'classnames/bind'
import css from 'less/containers/home.less'

const cx = classNames.bind(css)

class Home extends Component {
  render() {
    const { mobileNav } = this.props
    const mobile = (
      <div className={cx('sm')}>
        <div className={cx('title')}>
          <img className="img" src="dist/img/title-white.svg" />
          <div className={cx('subtitle')} />
        </div>
        <img className={cx('av')} src={require('site-images/ev-av.png')} />
        <ul className={cx('top')}>{mobileNav.map(x =>
          <li key={x.name} className={cx('item')}>
            <Link to={x.route}>{x.name}</Link>
          </li>
        )}</ul>

        <div className={cx('overlay')} />
      </div>
    )
    const desktop = (
      <div className={cx('lg')}>
        <Spinner />
        <Video />
        <div className={cx('title')}>
          <img className="img" src="dist/img/title-white.svg" />
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

Home.propTypes = {
  mobileNav: PropTypes.array
}

export default connect(
  state => ({ mobileNav: state.site.mobileNav })
)(Home)