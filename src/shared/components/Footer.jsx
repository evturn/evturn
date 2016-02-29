import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../client/less/components/footer.less';
import { Icon } from './reuseables';

const cx = classNames.bind(styles);

export default ({ page }) => {
  return (
    <footer className={cx('footer', page)}>
      <div className={cx('text')}>Evan Turner | evturn.com  <Icon className={'fa fa-copyright'} /> 2016 built with <Icon className={cx('icon', 'devicon-react-plain-wordmark')} /></div>
    </footer>
  );
}