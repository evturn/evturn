import React, { Component } from 'react';
import classNames from 'classnames/bind';
import css from 'less/components/work-web.less';

const cx = classNames.bind(css);

export default class WorkWebDetails extends Component {
  render() {
    const { tech, links, name,
      id, description } = this.props;

    const projectName = <div className={cx('name')}>{name}</div>;

    const projectDesc = <div className={cx('desc')}>{description}</div>;

    const projectLinks = (
      links ? (
        <ul className={cx('links')}>{links.map(link =>
          <li key={link.url} className={cx('item')}>
            <a href={link.url} target="_blank"><span className={link.icon} /></a>
            <div className={cx('title')}>{link.name}</div>
          </li>
        )}</ul>
      ) : null
    );

    const projectTech = (
      <ul className={cx('tech')}>{tech.map(item =>
        <li key={item.name} className={cx('item')}>
          <span className={item.icon} />
          <div className={cx('title')}>{item.name}</div>
        </li>
      )}</ul>
    );

    return (
      <div className={cx('detail')}>
        {projectName}
        {projectDesc}
        {projectLinks}
        {projectTech}
      </div>
    );
  }
}