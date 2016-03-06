import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { UnorderedList, ListItem } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/components/work-oss.less';

const cx = classNames.bind(styles);

class WorkOSS extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <UnorderedList className={cx('items')}>{this.props.OSS.map((item, i ) => {
        return (
          <ListItem key={i} className={cx('item')}>
            <div className={cx('content')}>
              <div className={cx('name')}>{item.name}</div>
              <div className={cx('desc')}>{item.description}</div>

              <UnorderedList className={cx('links')}>{item.links.map((link, i) => {
                return (
                  <ListItem key={i} className={cx('link')}><a href={link.url} target="_blank">
                    <span className={link.icon} /></a>
                  </ListItem>
                );
              })}</UnorderedList>
            </div>
          </ListItem>
        );
      })}

      </UnorderedList>
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