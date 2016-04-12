import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import WorkWebNav from 'components/WorkWebNav';
import WorkWebDetails from 'components/WorkWebDetails';
import WorkWebCarousel from 'components/WorkWebCarousel';
import classNames from 'classnames/bind';
import css from 'less/components/work-web.less';

const cx = classNames.bind(css);

class WorkWeb extends Component {
  render() {
    const { slides, item, nav } = this.props;

    return (
      <div>
        <div className={cx('project')}>
          <WorkWebCarousel {...slides} />
          <WorkWebDetails {...item} />
        </div>
        <WorkWebNav items={nav} id={item.id} />
      </div>
    );
  }
}


WorkWeb.propTypes = {
  slides: PropTypes.object,
  item: PropTypes.object,
  mounted: PropTypes.bool,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    slides: state.slideshow.slides,
    item: state.slideshow.item,
    nav: state.slideshow.nav,
    mounted: state.slideshow.mounted
  })
)(WorkWeb);