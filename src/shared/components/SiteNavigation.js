import React from 'react';
import SiteNavigationHeader from 'components/SiteNavigationHeader';
import SiteNavigationLinks from 'components/SiteNavigationLinks';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

export default ({ open, pages, toggle }) => {
  const classname = cx({
    'menu': true,
    'in': open,
    'out': !open
  });

  return (
    <nav className={classname}>
      <SiteNavigationHeader
        toggle={toggle}
      />
      <SiteNavigationLinks
        pages={pages}
        toggle={toggle}
      />
    </nav>
  );
}