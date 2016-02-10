import React from 'react';
import StatCounters from 'components/StatCounters';
import classNames from 'classnames/bind';
import styles from 'css/containers/work.less';

const cx = classNames.bind(styles);

export default ({ name, description }) => {
  return (
    <div className={cx('project-title')}>{name}</div>
    <div className={cx('project-description')}>{description}</div>
  );
}