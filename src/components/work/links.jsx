'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './links.pre';

const LinksList = CSSModules(React.createClass({
  render() {
    return (
      <ul styleName='list'>
        {this.props.links.map((result, i) => {
          return (
            <li key={i} styleName='item'>
              <a href={result.url} target="_blank">
                <div styleName='icon'><span className={result.icon}></span></div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}), styles);


const Links = React.createClass({
  hasProps() {
    if (this.state === null) {
      return false;
    } else if (this.state.links) {
      return true;
    }
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      links: newProps.links
    });
  },
  componentDidMount() {
    return this.setState({
      links: this.props.links
    });
  },
  render() {
    const links = this.hasProps() ? <LinksList links={this.state.links}/> : '';

    return <div styleName='root'>{links}</div>;
  }
});

export default CSSModules(Links, styles);