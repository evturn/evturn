import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/thumbnails.less';

const cx = classNames.bind(styles);

export default ({ items, id }) => {
  return (
    <div className={cx('project-thumbs')}>
      <ul className={cx('tiles')}>{items.map((project, i) => {
        const active = cx({
          'thumb-active': project.id === id,
          'thumb': project.id !== id
        });

        return (
          <li key={i} className={active}>
            <Link to={`work/${project.id}`}>
              <div className={cx('frame')}>
                <img src={project.image} />
                <div className={cx('shadow')} />
              </div>
            </Link>
          </li>
        );
      })}</ul>
    </div>
  );
}