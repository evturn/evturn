import React from 'react';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/containers/contact.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  return (
    <ul className={cx('circles')}>{items.map((link, i) => {
      return (
        <li key={i} className={cx('circle')}>
          <div className={cx('icon')}>
            <a href={link.url} target="_blank">
              <FontIcon type={'fa'} name={link.icon} />
            </a>
          </div>
        </li>
      );
    })}</ul>
  );
}