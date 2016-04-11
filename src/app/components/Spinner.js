import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import css from 'less/components/spinner.less';

const cx = classNames.bind(css);

class Spinner extends Component {
  render() {
    const animation = cx({
      'root': true,
      'fade-out': this.props.ready,
      'hidden': this.props.done
    });
    return (
      <div className={animation}>
        <div className={cx('animation')}></div>
        <div className={cx('logo')}>
          <img className={cx('image')} src={require('site-images/ev-av.png')} />
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  ready: PropTypes.bool,
  done: PropTypes.bool
};

export default connect(
  state => ({
    ready: state.video.ready,
    done: state.video.done
  })
)(Spinner);