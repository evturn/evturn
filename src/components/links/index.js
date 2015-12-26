'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Links = React.createClass({
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    const link = this.props.circles ? 'circle' : 'square';
    return (
      <ul styleName={`${link}s`}>
        {this.props.items.map((obj, i) => {
          return (
            <li key={i} styleName={link}>
              <div styleName='icon'>
                <a href={obj.url} target="_blank">
                  <span className={obj.icon}></span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
});

export default CSSModules(Links, styles);