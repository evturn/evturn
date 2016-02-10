import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/reuseables.less';

const cx = classNames.bind(styles);

export const PageContainer = props => {
  return (
    <div className={cx('page')}>{props.children}</div>
  );
}

export const SectionContainer = props => {
  return (
    <div className={cx('section')}>{props.children}</div>
  );
}

export const TextHeader = ({ text }) => {
  return (
    <div className={cx('header')}>{text}</div>
  );
}

export const TextTitle = ({ text }) => {
  return (
    <div className={cx('title')}>{text}</div>
  );
}

export const TextParagraph = ({ text }) => {
  return (
    <div className={cx('paragraph')}>{text}</div>
  );
}

export const Image = ({ src, classname }) => {
  return (
    <img className={cx('img-scale', classname)} src={src} />
  );
}