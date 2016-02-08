import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'components/Spinner';
import VideoPlayer from 'components/VideoPlayer';
import classNames from 'classnames/bind';
import styles from 'css/containers/home.less';

const cx = classNames.bind(styles);

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx('home')}>
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