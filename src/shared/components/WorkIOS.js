import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'less/components/work-ios.less';
import { AppImage, UnorderedList, ListItem } from 'components/reuseables';

const cx = classNames.bind(styles);

export default class WorkIOS extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <UnorderedList className={cx('items')}>{this.props.iOS.map((item, i ) => {
          return (
            <ListItem key={i} className={cx('item')}>
              <div className={cx('name')}>{item.name}</div>
              <AppImage src={item.image} />
            </ListItem>
          );
        })}</UnorderedList>
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