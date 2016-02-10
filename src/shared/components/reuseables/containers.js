import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/reuseables/containers.less';

const cx = classNames.bind(styles);

export const Page = props => {
  return (
    <div className={cx('page')}>{props.children}</div>
  );
}

export const Section = props => {
  return (
    <div className={cx('section')}>{props.children}</div>
  );
}