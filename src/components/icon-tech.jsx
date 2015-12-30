'use strict';
import React from 'react';
import {default as Icon} from 'components/icon';

export default  React.createClass({
  getDefaultProps() {
    return {
      width: 'item'
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
      width
    } = this.state;

    return (
      <ul className='flex'>
        {items.map((obj, i) => {
          return (
            <Icon
              key={i}
              width={width}
              icon={obj.icon}
              caption={obj.name}
            />
          );
        })}
      </ul>
    );
  }
});