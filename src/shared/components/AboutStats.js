import React from 'react';
import StatCounters from 'components/StatCounters';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  return (
    <div className={cx('about-stats')}>
      <div className={cx('about-header')}>Statistics</div>
      <StatCounters items={items} />
    </div>
  );
}