import React, {Component} from 'react';
import __links from 'sources/links';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'styles/containers/contact.less';

const cx = classNames.bind(styles);

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.links = __links;
  }
  render() {
    return (
      <div className={cx('backdrop', 'fade-in')}>
        <ul className={cx('circles')}>{this.links.map((link, i) => {
          return (
            <li key={i} className={cx('circle')}>
              <div className={cx('icon')}>
                <a href={link.url} target="_blank">
                  <FontIcon type={'fa'} name={link.icon} />
                </a>
              </div>
            </li>
          );
        })}</ul>
      </div>
    );
  }
}