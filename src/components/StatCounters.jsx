import React from 'react';
import StatCounter from 'components/StatCounter';
import classNames from 'classnames/bind';
import styles from 'styles/common.less';

const cx = classNames.bind(styles);

export default class StatCounters extends React.Component {
  render() {
    console.log(this);
    return (
      <ul className={cx('flex')}>
        {this.props.items.map((item, i) => {
          <li key={i} className={cx('item-50')}>
            <div className={cx('icon-accent')}>
              <StatCounter number={item.number} />
            </div>
            <div className={cx('caption')}>{item.caption}</div>
          </li>
        })}
      </ul>
    );
  }
}