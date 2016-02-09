import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

export default ({ text }) => {
  return (
    <div className={cx('bio')}>
      <div className={cx('about-header')}>Development</div>
      <div className={cx('paragraph')}>{text}</div>
    </div>
  );
}