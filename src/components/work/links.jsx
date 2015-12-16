'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './links.pre';

const Link = React.createClass({
  render() {
    const { url, icon } = this.props.link;

    return (
      <li className={`${css.item} list-item-icon`}>
        <div className="list-item-icon__icon">
          <a href={ url } target="_blank">
            <span className={ `${css.icon} fa ${icon}`}></span>
          </a>
        </div>
      </li>
    );
  }
});

const Links = React.createClass({
  render() {
    let links;

    if (this.props.links) {
      links = (
        <ul className={`${css.list} list-icons`}>
          { this.props.links.map((result) => {
              return <Link key={result.url} link={result} />;
            })}
        </ul>
      );
    } else {
      links = '';
    }
    return <div className={css.root}>{links}</div>;
  }
});

export default CSSModules(Links, css);