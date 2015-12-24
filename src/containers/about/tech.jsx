'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as TechIcons} from 'components/icons/icon-tech';

import styles from './about.pre';

const Tech = React.createClass({
  getDefaultProps() {
    return {
      title: 'Notable Tools',
      width: 'item-25'
    };
  },
  getInitialState() {
    return {...this.props};
  },
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    const {
      title,
      items,
      width
    } = this.state;

    return (
      <div styleName='tech'>
        <div styleName='header'>{title}</div>
        <TechIcons
          items={items}
          width={width}
        />
      </div>
    );
  }
});

export default CSSModules(Tech, styles);