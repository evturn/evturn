'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {URL} from 'helpers';
import styles from './spinner.pre';

const Spinner = React.createClass({
  setTimerToHide() {
    setTimeout(() => {
      this.setState({
        display: styles.hidden
      });
    }, 2500);
  },
  getDefaultProps() {
    return {
      logo: require('images/site/ev-av.png')
    };
  },
  getInitialState() {
    return {
      display: 'animated'
    };
  },
  componentDidMount() {
    this.setTimerToHide();

    return this.setState({
      display: 'animated fadeOut'
    });
  },
  render() {
    return (
      <div styleName='root' className={this.state.display}>
        <div styleName='animation'></div>
        <div styleName='logo'>
          <img styleName='image' className='img-scale' src={this.props.logo}/>
        </div>
      </div>
    );
  }
});

export default CSSModules(Spinner, styles);