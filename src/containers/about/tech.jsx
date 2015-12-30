'use strict';
import React from 'react';
import {default as TechIcons} from 'components/icon-tech';

export default React.createClass({
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
      <div className='about-tech'>
        <div className='about-header'>{title}</div>
        <TechIcons
          items={items}
          width={width}
        />
      </div>
    );
  }
});