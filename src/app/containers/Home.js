import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { next } from 'actions/video';
import Spinner from 'components/Spinner';
import VideoPlayer from 'components/VideoPlayer';
import classNames from 'classnames/bind';
import css from 'less/containers/home.less';

const cx = classNames.bind(css);

class Home extends Component {
  render() {
    const { mobileNav } = this.props;
    const background = {
      backgroundImage: `url(${require('site-images/banana-plants.png')})`
    };
    const desktop = (
      <div className={cx('lg')} onClick={next}>
        <Spinner />
        <VideoPlayer />
        <div className={cx('title')}>
          <img className="img" src="dist/img/title-white.svg" />
          <div className={cx('subtitle')} />
        </div>
      </div>
    );

    const mobile = (
      <div className={cx('sm')}>
        <div className={cx('title')}>
          <img className="img" src="dist/img/title-white.svg" />
          <div className={cx('subtitle')} />
        </div>

        <img className={cx('av')} src={require('site-images/ev-av.png')} />

        <ul className={cx('top')}>{mobileNav.map(page =>
          <li key={page.name} className={cx('item')}>
            <Link to={page.route}>{page.name}</Link>
          </li>
        )}</ul>

        <div className={cx('overlay')} />
      </div>
    );

    return (
      <div style={background} className={cx('root')}>
        {desktop}
        {mobile}
      </div>
    );
  }
}

Home.propTypes = {
  mobileNav: PropTypes.array
};

export default connect(
  state => ({
    mobileNav: state.site.mobileNav
  })
)(Home);