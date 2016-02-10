import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/reuseables.less';

const cx = classNames.bind(styles);

export const PageContainer = props => {
  const { children, classname, ...rest } = props;

  return (
    <div className={cx('page', classname)} {...rest}>{children}</div>
  );
}

export const SectionContainer = props => {
  const { children, classname, ...rest } = props;

  return (
    <div className={cx('relative', classname)} {...rest}>{children}</div>
  );
}

export const AbsoluteContainer = props => {
  const { children, classname, ...rest } = props;

  return (
    <div className={cx('absolute', classname)} {...rest}>{children}</div>
  );
}

export const TextHeader = props => {
  const { text, classname, ...rest } = props;

  return (
    <div className={cx('header', classname)} {...rest}>{text}</div>
  );
}

export const TextTitle = props => {
  const { text, classname, ...rest } = props;

  return (
    <div className={cx('title', classname)} {...rest}>{text}</div>
  );
}

export const TextParagraph = props => {
  const { text, classname, ...rest } = props;

  return (
    <div className={cx('paragraph', classname)} {...rest}>{text}</div>
  );
}

export const Image = props => {
  const { src, classname, ...rest } = props;

  return (
    <img className={cx('img-scale', classname)} src={src} {...rest} />
  );
}

export const UnorderedList = props => {
  const { classname, children, ...rest } = props;

  return (
    <ul className={cx('unordered-list', classname)} {...rest}>{children}</ul>
  );
}

export const ListItem = props => {
  const { width, classname, children, ...rest } = props;

  return (
    <li style={ {width} } className={cx('list-item', classname)} {...rest}>{children}</li>
  );
}