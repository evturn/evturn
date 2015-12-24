'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './link-boxes.pre';

const LinkBoxes = React.createClass({
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    return (
      <ul styleName='list'>
        {this.props.items.map((obj, i) => {
          return (
            <li key={i} styleName='item'>
              <a href={obj.url} target="_blank">
                <div styleName='icon'>
                  <span className={obj.icon}></span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
});

export default CSSModules(LinkBoxes, styles);