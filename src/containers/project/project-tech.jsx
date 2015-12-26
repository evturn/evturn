'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as TechIcons} from 'components/icons/icon-tech';
import styles from './style.css';

const ProjectTech = React.createClass({
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
        <div styleName='title'>{title}</div>
        <TechIcons
          items={items}
          width={width}
        />
      </div>
    );
  }
});

export default CSSModules(ProjectTech, styles);