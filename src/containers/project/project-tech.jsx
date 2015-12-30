'use strict';
import React from 'react';
import {default as TechIcons} from 'components/icon-tech';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Made with',
      width: 'item-25'
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
      title,
      items,
      width
    } = this.state;

    return (
      <div>
        <div className='project-title'>{title}</div>
        <TechIcons
          items={items}
          width={width}
        />
      </div>
    );
  }
});