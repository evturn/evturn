import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppImage } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/components/work-ios.less';

const cx = classNames.bind(styles);

export default class WorkIOS extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className={cx('items')}>{this.props.iOS.map(item =>
        <li key={item.name} className={cx('item')}>
          <div className={cx('name')}>{item.name}</div>
          <AppImage src={item.image} />
        </li>
      )}</ul>
    );
  }
}

WorkIOS.propTypes = {
  OSS: PropTypes.array
};

function mapStateToProps(state) {
  return {
    iOS: state.work.iOS
  };
}

export default connect(mapStateToProps)(WorkIOS);