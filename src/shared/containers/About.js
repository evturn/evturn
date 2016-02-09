import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AboutHeader from 'components/AboutHeader';
import AboutBio from 'components/AboutBio';
import AboutTech from 'components/AboutTech';
import AboutStats from 'components/AboutStats';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bio, featuredTech, stats } = this.props;

    return (
      <div className={cx('about')}>
        <AboutHeader />
        <AboutBio text={bio} />
        <div className={cx('about-info')}>
          <AboutTech items={featuredTech} />
          <AboutStats items={stats} />
        </div>
      </div>
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