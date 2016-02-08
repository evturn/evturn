import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { next, connectStoreDispatch } from 'actions/video';
import Spinner from 'components/Spinner';
import VideoPlayer from 'components/VideoPlayer';
import classNames from 'classnames/bind';
import styles from 'css/containers/home.less';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props) {
    super(props);

    connectStoreDispatch(props.dispatch);
  }
  render() {
    return (
      <div className={cx('home')} onClick={() => next()}>
        <VideoPlayer />
        <Spinner />
        <div className={cx('home-banner')}>
          <h3 className={cx('home-title')}>Evan Turner</h3>
          <h3 className={cx('home-description')}>Developer</h3>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Home);