import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactLinks from 'components/ContactLinks';
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
        <ContactLinks items={this.props.links} />
      </div>
    );
  }
}

Contact.propTypes = {
  links: PropTypes.array
};

function mapStateToProps(state) {
  return {
    links: state.site.contact.links
  };
}

export default connect(mapStateToProps)(Contact);