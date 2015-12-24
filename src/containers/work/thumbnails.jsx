'use strict';
import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './thumbnails.pre';

const Thumbnails = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      title: 'Projects',
    };
  },
  render() {
    const {
      title,
      projects
    } = this.props;

    return (
      <div>
        <div styleName='header'>{title}</div>
        <ul styleName='list'>
          {projects.map((obj, i) => {
            return (
              <li key={i} styleName='item'>
                <Link to={`work/projects/${obj.id}`}>
                  <div styleName='frame'>
                    <img className='img-scale' src={obj.thumbnail} />
                    <div styleName='shadow'></div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

export default CSSModules(Thumbnails, styles);