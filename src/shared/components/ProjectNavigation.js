import React from 'react';
import { Link } from 'react-router';
import { Image, UnorderedList, ListItem } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/components/project-navigation.less';

const cx = classNames.bind(styles);

export default ({ items, id }) => {
  return (
    <UnorderedList classname={cx('list')}>{items.map((project, i) => {
      return (
        <ListItem
          key={i}
          classname={cx('item', {'active': project.id === id})}>
          <Link to={`work/${project.id}`}>
            <Image src={project.image} />
            <div className={cx('overlay')} />
          </Link>
        </ListItem>
      );
    })}</UnorderedList>
  );
}