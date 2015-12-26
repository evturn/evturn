'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Icon} from './icon';
import styles from './style.css';

const TechIcons = React.createClass({
  getDefaultProps() {
    return {
      width: 'item',
      classname: 'icon'
    };
  },
  getInitialState() {
    return {...this.props};
  },
  componentWillReceiveProps(newProps) {
    return this.setState({...newProps});
  },
  componentWillMount() {
    return this.setState({...this.props});
  },
  render() {
    const {
      items,
      width,
      classname
    } = this.state;

    return (
      <ul styleName='list'>
        {items.map((obj, i) => {
          return (
            <Icon
              key={i}
              width={width}
              classname={classname}
              icon={obj.icon}
              caption={obj.name}
            />
          );
        })}
      </ul>
    );
  }
});

export default CSSModules(TechIcons, styles);