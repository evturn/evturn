import React from 'react';
import TechIcons from 'components/TechIcons';

export const WorkTech = React.createClass({
  getDefaultProps() {
    return {
      title: 'Made with'
    };
  },
  getInitialState() {
    return {
      items: this.props.items
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      items: nextProps.items
    });
  },
  render() {
    const {title} = this.props;
    const {items} = this.state;

    return (
      <div className='project-tech'>
        <div className='project-title'>{title}</div>
        <TechIcons items={items} width={'item-25'} />
      </div>
    );
  }
});