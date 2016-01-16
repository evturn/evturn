import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames/bind';
import styles from 'styles/components/thumbnails.less';

const cx = classNames.bind(styles);

export default class Thumbnails extends React.Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
    this.activeId = props.activeId;
  }
  render() {
    return (
      <div className={cx('project-thumbs')}>
        <ul className={cx('tiles')}>{this.projects.map((project, i) => {

          const activeClass = cx({
            'thumb-active': project.id === this.activeId,
            'thumb': project.id !== this.activeId
          });

          return (
            <li key={i} className={activeClass}>
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
}