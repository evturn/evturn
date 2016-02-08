import React from 'react';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

export default ({ page, toggle }) => {
  const logo = cx(`logo-${page}`);
  const burger = cx(`burger-${page}`);

  return (
    <div>
      <div className={logo}>
        <img src='src/client/assets/images/site/ev-av.png' />
      </div>
      <div className={burger} onClick={() => toggle()}>
        <FontIcon type={'fa'} name={'fa-bars'} />
      </div>
    </div>
  );
}

