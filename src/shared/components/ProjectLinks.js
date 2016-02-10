import React from 'react';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/containers/work.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  if (!items) { return <div />; }

  return (
    <div className={cx('project-links')}>
      <ul className={cx('squares')}>{items.map((link, i) => {
        return (
          <li key={i} className={cx('square')}>
            <div className={cx('icon')}>
              <a href={link.url} target="_blank">
                <FontIcon type={'fa'} name={link.icon} />
              </a>
            </div>
          </li>
        );
      })}</ul>
    </div>
  );
}