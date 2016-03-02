import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/about.less';
import StatCounters from '../components/StatCounters';
import { TextHeader, TextParagraph, SiteImage } from '../components/reuseables';


const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bio, featuredTech, stats } = this.props;

    return (
      <div className={cx('root')}>
        <div className={cx('av')}>
          <div className={cx('image')}><SiteImage src="ev-av.png" /></div>
        </div>
        <div className={cx('details')}>
          <div className={cx('bio')}>
            <TextHeader classname={cx('center')} text={'Development'} />
            <TextParagraph classname={cx('paragraph')} text={bio} />
          </div>
          <div className={cx('tech')}>
            <ul className={cx('list')}>{featuredTech.map((item, i) => {
              return <li key={i} className={cx('item')}><span className={cx('icon', item.icon)} /></li>;
            })}</ul>
          </div>
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