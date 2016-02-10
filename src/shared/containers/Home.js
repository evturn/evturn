import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { next } from 'actions/video';
import classNames from 'classnames/bind';
import styles from 'css/containers/home.less';
import Spinner from 'components/Spinner';
import VideoPlayer from 'components/VideoPlayer';
import { FullPageContainer, AbsoluteContainer } from 'components/reuseables';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FullPageContainer onClick={() => next()}>
        <VideoPlayer />
        <Spinner />
        <AbsoluteContainer classname={cx('banner')}>
          <h3 className={cx('home-title')}>Evan Turner</h3>
          <h3 className={cx('home-description')}>Developer</h3>
        </AbsoluteContainer>
      </FullPageContainer>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Home);