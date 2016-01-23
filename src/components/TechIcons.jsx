import React from 'react';
import classNames from 'classnames/bind';
import FontIcon from 'components/FontIcon';
import styles from 'styles/common.less';

const cx = classNames.bind(styles);

export default class TechIcons extends React.Component {
  render() {
    return (
      <ul className={cx('flex')}>
        {this.props.items.map((item, i) => {
          return (
            <li key={i} className={cx(this.props.width)}>
              <div className={cx('icon-accent')}>
                <FontIcon name={item.icon} />
              </div>
              <div className={cx('caption')}>{item.name}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}