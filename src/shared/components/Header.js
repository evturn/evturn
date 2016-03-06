import React from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../../client/less/components/nav.less';
import {
  UnorderedList, SiteImage,
  ListItem, SectionContainer } from './reuseables';

const cx = classNames.bind(styles);

export default ({ open, page, pages, toggle }) => {
  return (
    <header>
      {page !== 'home' ? (
        <div className={cx('navbar')}>
          <SiteImage className={cx('image')} src='title-white.svg' />
        </div>
      ) : null}

      <div className={cx('burger', page)} onClick={toggle}>
        <span className={'fa fa-bars'} />
      </div>

      <nav className={cx('menu', {'in': open, 'out': !open})}>
        <SectionContainer>
          <SectionContainer classname={cx('close')} onClick={toggle}>
            <SiteImage src={'close-light.png'} />
          </SectionContainer>
        </SectionContainer>
        <UnorderedList>{pages.map(item =>
          <ListItem key={item.id} className={cx('item')} onClick={toggle}>
            {item.id === 1 ? (
              <IndexLink to={item.route}>{item.name}</IndexLink>
            ) : (
              <Link to={item.route}>{item.name}</Link>
            )}
          </ListItem>
        )}</UnorderedList>
      </nav>
    </header>
  );
}