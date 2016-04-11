import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import css from 'less/components/work-web-nav.less';

const cx = classNames.bind(css);

export default ({ items, id }) => {
  return (
    <ul className={cx('projects')}>{items.map(item =>
      <li key={item.id} className={cx('item', {'active': item.id === id})}>
        <Link to={`/work/web/${item.id}`}>
          <img className="img" src={item.image} />
          <div className={cx('overlay')} />
        </Link>
      </li>
    )}</ul>
  );
}