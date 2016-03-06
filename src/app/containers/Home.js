import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { next } from 'actions/video';
import Spinner from 'components/Spinner';
import VideoPlayer from 'components/VideoPlayer';
import { SiteImage } from 'components/reuseables';
import img from 'images/site/banana-plants.png';
import classNames from 'classnames/bind';
import styles from 'less/containers/home.less';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { mobileNav } = this.props;

    return (
      <div style={{  backgroundImage: `url('${img}')` }} className={cx('root')}>
        <div className={cx('lg')} onClick={next}>
          <Spinner />
          <VideoPlayer />
          <div className={cx('title')}>
            <SiteImage src='title-white.svg' />
            <div className={cx('subtitle')} />
          </div>
        </div>

        <div className={cx('sm')}>
          <div className={cx('title')}>
            <SiteImage src='title-white.svg' />
            <div className={cx('subtitle')} />
          </div>

          <SiteImage className={cx('av')} src='ev-av.png' />

          <ul className={cx('top')}>{mobileNav.map(page =>
            <li key={page.name} className={cx('item')}>
              <Link to={page.route}>{page.name}</Link>
            </li>
          )}</ul>

          <div className={cx('overlay')} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  mobileNav: PropTypes.array
};

function mapStateToProps(state) {
  return {
    mobileNav: state.site.mobileNav
  };
}

export default connect(mapStateToProps)(Home);