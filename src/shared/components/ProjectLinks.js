import React from 'react';
import FontIcon from 'components/FontIcon';
import { UnorderedList, ListItem, SectionContainer } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'css/containers/work.less';

const cx = classNames.bind(styles);

export default ({ items }) => {
  if (!items) { return <div />; }

  return (
    <UnorderedList classname={cx('list')}>{items.map((link, i) => {
      return (
        <ListItem key={i} className={cx('item')}>
          <SectionContainer className={cx('icon')}>
            <a href={link.url} target="_blank">
              <FontIcon type={'fa'} name={link.icon} />
            </a>
          </SectionContainer>
        </ListItem>
      );
    })}</UnorderedList>
  );
}