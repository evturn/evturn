import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'less/components/work-oss.less';

const cx = classNames.bind(styles);

class WorkOSS extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className={cx('items')}>{this.props.OSS.map(item =>
        <li key={item.name} className={cx('item')}>
          <div className={cx('content')}>
            <div className={cx('name')}>{item.name}</div>
            <div className={cx('desc')}>{item.description}</div>

            <ul className={cx('links')}>{item.links.map(link =>
              <li key={link.url} className={cx('link')}>
                <a href={link.url} target="_blank"><span className={link.icon} /></a>
              </li>
            )}</ul>

          </div>
        </li>
      )}</ul>
    );
  }
}

WorkOSS.propTypes = {
  OSS: PropTypes.array
};

function mapStateToProps(state) {
  return {
    OSS: state.work.OSS
  };
}

export default connect(mapStateToProps)(WorkOSS);