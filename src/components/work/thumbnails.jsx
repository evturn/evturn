'use strict';
import React from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import css from './thumbnails.pre';

const Thumbnails = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <div>
        <div className={css.header}>Projects</div>
        <ul className={css.list}>
          { this.props.projects.map((result) => {
            return (
              <li key={result.id} className={css.item}>
                <Link to={`work/projects/${ result.id }`}>
                  <div className={css.frame}>
                    <img className="img-scale" src={result.thumbnail} />
                    <div className={css.shadow}></div>
                  </div>
                </Link>
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
});

export default CSSModules(Thumbnails, css);