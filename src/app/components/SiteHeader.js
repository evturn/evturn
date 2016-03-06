import React from 'react';
import { IndexLink, Link } from 'react-router';
import { SiteImage } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/components/site-header.less';

const cx = classNames.bind(styles);

export default ({ open, page, pages, toggle }) => {
  return (
    <header>
      {page !== 'home' ? (
        <div className={cx('navbar')}>
          <SiteImage className={cx('image')} src='title-white.svg' />
        </div>
      ) : null}

      <div className={cx('navbar-burger', page)} onClick={toggle}>
        <span className={'fa fa-bars'} />
      </div>

      <nav className={cx('menu', {'in': open, 'out': !open})}>
        <div className={cx('menu-header')}>
          <div className={cx('close')} onClick={toggle}>
            <SiteImage src={'close-light.png'} />
          </div>
        </div>

        <ul className={cx('menu-links')}>{pages.map(item =>
          <li key={item.id} className={cx('item')} onClick={toggle}>
            {item.id === 1 ? (
              <IndexLink to={item.route}>{item.name}</IndexLink>
            ) : (
              <Link to={item.route}>{item.name}</Link>
            )}
          </li>
        )}</ul>

      </nav>
    </header>
  );
}