import React from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../../client/less/components/nav.less';
import {
  UnorderedList, AbsoluteContainer,
  SiteImage, ListItem, SectionContainer, Icon } from './reuseables';

const cx = classNames.bind(styles);

export default ({ open, page, pages, toggle }) => {
  const navbar = (
    <div className={cx('page-header')}>
      <SiteImage className={cx('image')} src='title-white.svg' />
    </div>
  );
  return (
    <header>
      {page !== 'home' ? navbar : null}
      <AbsoluteContainer
        classname={cx('burger', page)}
        onClick={() => toggle()}>
        <Icon className={'fa fa-bars'} />
      </AbsoluteContainer>

      <nav className={cx('menu', {'in': open, 'out': !open})}>
        <SectionContainer>
          <SectionContainer classname={cx('close')} onClick={() => toggle()}>
            <SiteImage src={'close-light.png'} />
          </SectionContainer>
        </SectionContainer>
        <UnorderedList>{pages.map((page, i) => {
          const { route, name, id } = page;
          const link = id === 1 ?
            <IndexLink to={route} children={name} /> :
            <Link to={route} children={name} />;

          return (
            <ListItem key={i} className={cx('item')} onClick={() => toggle()} children={link} />
          );
        })}</UnorderedList>
      </nav>
    </header>
  );
}