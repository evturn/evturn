import React from 'react';
import classNames from 'classnames/bind';
import styles from 'less/components/footer.less';

const cx = classNames.bind(styles);

export default ({ page }) => {
  return (
    <footer className={cx('footer', page)}>
      <div className={cx('text')}>Evan Turner | evturn.com  <span className="fa fa-copyright" /> 2016 built with <span className={cx('icon', 'devicon-react-plain-wordmark')} /></div>
    </footer>
  );
}