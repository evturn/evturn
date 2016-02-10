import React from 'react';
import classNames from 'classnames/bind';
import { UnorderedList, ListItem } from 'components/reuseables';
import FontIcon from 'components/FontIcon';
import styles from 'css/common.less';

const cx = classNames.bind(styles);

export default ({ items, width }) => {
  return (
    <UnorderedList>
      { items.map((item, i) => {
        return (
          <ListItem key={i} width={width}>
            <div className={cx('icon-accent')}>
              <FontIcon name={item.icon} />
            </div>
            <div className={cx('caption')}>{item.name}</div>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}