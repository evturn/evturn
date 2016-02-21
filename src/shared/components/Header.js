import React from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../../client/less/components/nav.less';
import {
  UnorderedList, AbsoluteContainer,
  SiteImage, ListItem, SectionContainer, Icon
} from './reuseables';

const cx = classNames.bind(styles);

export default ({ open, page, pages, toggle }) => {
  return (
    <header>
      <AbsoluteContainer classname={cx('logo', page)}>
        <SiteImage src="ev-av.png" />
      </AbsoluteContainer>
      <AbsoluteContainer classname={cx('burger', page)} onClick={() => toggle()}>
        <Icon classname={'fa fa-bars'} />
      </AbsoluteContainer>

      <nav className={cx('menu', {'in': open, 'out': !open})}>
        <SectionContainer>
          <SectionContainer classname={cx('close')} onClick={() => toggle()}>
            <Icon classname={'fa fa-times'} />
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