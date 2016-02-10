import React from 'react';
import TechIcons from 'components/TechIcons';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  return (
    <div className={cx('about-tech')}>
      <div className={cx('about-header')}>Tools</div>
      <TechIcons items={items} width={'20%'} />
    </div>
  );
}