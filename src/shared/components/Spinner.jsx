import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/spinner.less';

const cx = classNames.bind(styles);

export default class Spinner extends Component {
  constructor(props) {
    super(props);

    this.image = 'src/client/assets/images/site/ev-av.png';
    this.state = {
      ready: false,
      done: false
    };
  }
  componentDidMount() {
    setTimeout(() => this.removeSpinner(), 2000);
  }
  render() {
    const animation = cx({
      'spinner': true,
      'hidden': this.state.done,
      'fade-out': this.state.ready
    });
    return (
      <div className={animation}>
        <div className={cx('animation')}></div>
        <div className={cx('spinner-logo')}>
          <img className={cx('spinner-image')} src={this.image} />
        </div>
      </div>
    );
  }
  removeSpinner() {
    this.setState({
      ready: true,
    });

    setTimeout(() => this.setState({ done: true }), 1000);
  }
}