import React from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

export default ({ pages, toggle }) => {
  return (
    <ul className={cx('flex')}>{pages.map((page, i) => {
      const { route, name, id } = page;
      const link = id === 1 ?
        <IndexLink to={route}>{name}</IndexLink> :
        <Link to={route}>{name}</Link>;

      return (
        <li key={i} className={cx('menu-item')} onClick={() => toggle()}>
          {link}
        </li>
      );
    })}</ul>
  );
}