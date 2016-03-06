import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'less/components/spinner.less';

const cx = classNames.bind(styles);

class Spinner extends Component {
  constructor(props) {
    super(props);
  }
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

function mapStateToProps(state) {
  return {
    ready: state.video.ready,
    done: state.video.done
  };
}

export default connect(mapStateToProps)(Spinner);