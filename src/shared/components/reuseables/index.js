import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/reuseables.less';

const cx = classNames.bind(styles);

export const PageContainer = props => {
  const { children, classname } = props;

  return (
    <div className={cx('page', classname)}>{children}</div>
  );
}

export const SectionContainer = props => {
  const { children, classname } = props;

  return (
    <div className={cx('section', classname)}>{children}</div>
  );
}

export const TextHeader = props => {
  const { text, classname } = props;

  return (
    <div className={cx('header', classname)}>{text}</div>
  );
}

export const TextTitle = props => {
  const { text, classname } = props;

  return (
    <div className={cx('title', classname)}>{text}</div>
  );
}

export const TextParagraph = props => {
  const { text, classname } = props;

  return (
    <div className={cx('paragraph', classname)}>{text}</div>
  );
}

export const Image = props => {
  const { src, classname } = props;

  return (
    <img className={cx('img-scale', classname)} src={src} />
  );
}

export const UnorderedList = props => {
  const { classname, children } = props;

  return (
    <ul className={cx('unordered-list', classname)}>{children}</ul>
  );
}

export const ListItem = props => {
  const { width, classname, children } = props;

  return (
    <li style={ {width} } className={cx('list-item', classname)}>{children}</li>
  );
}