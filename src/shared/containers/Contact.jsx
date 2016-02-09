import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/containers/contact.less';

const cx = classNames.bind(styles);

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx('backdrop', 'fade-in')}>
        <ul className={cx('circles')}>{this.props.links.map((link, i) => {
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

Contact.propTypes = {
  links: PropTypes.array
};

function mapStateToProps(state) {
  return {
    links: state.site.contact
  };
}

export default connect(mapStateToProps)(Contact);