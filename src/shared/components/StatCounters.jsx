import React from 'react';
import StatCounter from 'components/StatCounter';
import classNames from 'classnames/bind';
import styles from 'css/common.less';

const cx = classNames.bind(styles);

export default class StatCounters extends React.Component {
  render() {
    return (
      <ul className={cx('flex')}>
        {this.props.items.map((item, i) => {
          return (
            <li key={i} className={cx('item-50')}>
              <div className={cx('icon-accent')}>
                <StatCounter classname={cx('text')} number={item.number} />
              </div>
              <div className={cx('caption')}>{item.caption}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}