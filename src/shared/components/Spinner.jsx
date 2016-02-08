import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'css/components/spinner.less';

const cx = classNames.bind(styles);

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }
  render() {
    const animation = cx({
      'spinner': true,
      'fade-out': this.props.ready,
      'hidden': this.props.done
    });
    return (
      <div className={animation}>
        <div className={cx('animation')}></div>
        <div className={cx('spinner-logo')}>
          <img className={cx('spinner-image')} src="src/client/assets/images/site/ev-av.png" />
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