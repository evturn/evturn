import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

export default () => {
  return (
    <div className={cx('header')}>
      <img className={cx('about-image')} src="src/client/assets/images/site/skel.gif" />
    </div>
  );
}