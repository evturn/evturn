import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/contact.less';
import img from 'images/site/banana-plants.png';
import {
  UnorderedList, ListItem, Icon,
  SectionContainer, PageContainer
} from '../components/reuseables';

const cx = classNames.bind(styles);

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{  backgroundImage: `url('${img}')` }} className={cx('root')}>
        <UnorderedList classname={cx('list')}>{this.props.links.map((link, i) => {
          return (
            <ListItem key={i} classname={cx('item')}>
              <SectionContainer classname={cx('icon')}>
                <a href={link.url} target="_blank">
                  <Icon classname={link.icon} />
                </a>
              </SectionContainer>
            </ListItem>
          );
        })}</UnorderedList>
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