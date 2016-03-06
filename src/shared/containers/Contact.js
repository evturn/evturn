import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/contact.less';
import img from 'images/site/banana-plants.png';
import {
  List, ListItem, Icon,
  SectionContainer, PageContainer
} from '../components/reuseables';

const cx = classNames.bind(styles);

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundImage: `url('${img}')` }} className={cx('root')}>
        <ul className={cx('icons')}>{this.props.links.map(link =>
          <li key={link.icon} className={cx('item')}>
            <a href={link.url} target="_blank"><span className={link.icon} /></a>
          </li>
        )}</ul>
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