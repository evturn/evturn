'use strict';
import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Tiles = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    const {items, path} = this.props;

    return (
      <ul styleName='root'>
        {items.map((obj, i) => {
          return (
            <li key={i} styleName='item'>
              <Link to={`${path}${obj.id}`}>
                <div styleName='frame'>
                  <img className='img-scale' src={obj.thumbnail} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});

export default CSSModules(Tiles, styles);