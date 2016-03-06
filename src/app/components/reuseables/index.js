import React from 'react';
import classNames from 'classnames/bind';
import styles from 'less/reuseables.less';

const cx = classNames.bind(styles);

export const AppImage = props => {
  const { src, classname, ...rest } = props;
  const PATH = 'src/client/img/apps/';

  return (
    <img className={cx('image')} src={src} {...rest} />
  );
}

export const SiteImage = props => {
  const { src, classname, ...rest } = props;
  const PATH = 'src/client/img/work/';

  return (
    <img className={cx('image')} src={src} {...rest} />
  );
}

export const Image = props => {
  const { src, classname, ...rest } = props;

  return (
    <img className={cx('image', classname)} src={src} {...rest} />
  );
}