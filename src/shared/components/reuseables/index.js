import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../../client/less/reuseables.less';

const cx = classNames.bind(styles);

export const PageContainer = props => {
  const { children, classname, ...rest } = props;

  return (
    <div className={cx('page', classname)} {...rest}>{children}</div>
  );
}

export const FullPageContainer = props => {
  const { children, classname, ...rest } = props;

  return (
    <div className={cx('full-page', classname)} {...rest}>{children}</div>
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

export const AppImage = props => {
  const { src, classname, ...rest } = props;
  const PATH = 'src/client/img/apps/';

  return (
    <img className={cx('image', classname)} src={`${PATH}${src}`} {...rest} />
  );
}

export const SiteImage = props => {
  const { src, classname, ...rest } = props;
  const PATH = 'src/client/img/site/';

  return (
    <img className={cx('image', classname)} src={`${PATH}${src}`} {...rest} />
  );
}

export const Image = props => {
  const { src, classname, ...rest } = props;

  return (
    <img className={cx('image', classname)} src={src} {...rest} />
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

export const IconContainer = props => {
  const { classname, children, ...rest } = props;

  return (
    <div className={cx('icon-container', classname)} {...rest}>{children}</div>
  );
}

export const Icon = props => {
  const { classname, ...rest } = props;

  return (
    <span className={classname} {...rest}></span>
  );
}

export const IconCaption  = props => {
  const { classname, children, ...rest } = props;

  return (
    <div className={cx('icon-caption', classname)} {...rest}>{children}</div>
  );
}