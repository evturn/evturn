import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/containers/contact.less';
import {
  UnorderedList, ListItem,
  SectionContainer, PageContainer
} from 'components/reuseables';

const cx = classNames.bind(styles);

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageContainer classname={cx('root')}>
        <UnorderedList classname={cx('list')}>{this.props.links.map((link, i) => {
          return (
            <ListItem key={i} classname={cx('item')}>
              <SectionContainer classname={cx('icon')}>
                <a href={link.url} target="_blank">
                  <FontIcon type={'fa'} name={link.icon} />
                </a>
              </SectionContainer>
            </ListItem>
          );
        })}</UnorderedList>
      </PageContainer>
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