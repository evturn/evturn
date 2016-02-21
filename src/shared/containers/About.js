import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/about.less';
import TechIcons from '../components/TechIcons';
import StatCounters from '../components/StatCounters';
import {
  TextHeader, TextParagraph, SiteImage,
  PageContainer, SectionContainer } from '../components/reuseables';


const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bio, featuredTech, stats } = this.props;

    return (
      <PageContainer classname={cx('root')}>
        <SectionContainer classname={cx('header')}>
          <SiteImage src="ev-av.png" />
        </SectionContainer>
        <SectionContainer classname={cx('bio')}>
          <TextHeader classname={cx('center')} text={'Development'} />
          <TextParagraph classname={cx('paragraph')} text={bio} />
        </SectionContainer>
        <SectionContainer>
          <div className={cx('tech')}>
            <TextHeader classname={cx('center')} text={'Tools'} />
            <TechIcons items={featuredTech} width={'25%'} />
          </div>
          <div className={cx('stats')}>
            <TextHeader classname={cx('center')} text={'Statistics'} />
            <StatCounters items={stats} />
          </div>
        </SectionContainer>
      </PageContainer>
    );
  }
}

About.propTypes = {
  stats: PropTypes.array,
  bio: PropTypes.string,
  featuredTech: PropTypes.array
};

function mapStateToProps(state) {
  return {
    featuredTech: state.site.about.featuredTech,
    stats: state.site.about.stats,
    bio: state.site.about.bio
  };
}

export default connect(mapStateToProps)(About);