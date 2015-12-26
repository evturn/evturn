import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './icon.pre';

const Icon = React.createClass({
  render() {
    const content = this.props.icon ? <span className={this.props.icon}></span> : this.props.text;

    return (
      <li styleName={this.props.width}>
        <div styleName={this.props.classname}>{content}</div>
        <div styleName='caption'>{this.props.caption}</div>
      </li>
    );
  }
});

export default CSSModules(Icon, styles);