import React from 'react';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

export default ({ toggle }) => {
  return (
    <div className={cx('menu-header')}>
      <div className={cx('menu-icon')} onClick={() => toggle()}>
        <FontIcon type={'fa'} name={'fa-times'} />
      </div>
    </div>
  );
}