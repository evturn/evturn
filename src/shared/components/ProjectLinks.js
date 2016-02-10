import React from 'react';
import { UnorderedList, ListItem, SectionContainer, Icon } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/containers/work.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  if (!items) { return <div />; }

  return (
    <UnorderedList classname={cx('list')}>{items.map((link, i) => {
      return (
        <ListItem key={i} className={cx('item')}>
          <SectionContainer className={cx('icon')}>
            <a href={link.url} target="_blank">
              <Icon classname={link.icon} />
            </a>
          </SectionContainer>
        </ListItem>
      );
    })}</UnorderedList>
  );
}