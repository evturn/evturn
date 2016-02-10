import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/reuseables/text.less';

const cx = classNames.bind(styles);

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