import React from 'react';
import classNames from 'classnames/bind';
import FontIcon from 'components/FontIcon';
import styles from 'css/common.less';

const cx = classNames.bind(styles);

export default ({ items, width }) => {
  return (
    <ul className={cx('flex')}>{items.map((item, i) => {
      return (
        <li key={i} className={cx(width)}>
          <div className={cx('icon-accent')}>
            <FontIcon name={item.icon} />
          </div>
          <div className={cx('caption')}>{item.name}</div>
        </li>
      );
    })}</ul>
  );
}