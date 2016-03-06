import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setProject } from 'actions/project';
import WorkWeb from 'components/WorkWeb';
import { UnorderedList, ListItem } from 'components/reuseables';
import classNames from 'classnames/bind';
import styles from 'less/containers/work.less';

const cx = classNames.bind(styles);

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    setProject(this.props.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      setProject(nextProps.params.id);
    }
  }
  render() {
    return (
      <div className={cx('page')}>
        <ul className={cx('categories')}>{this.props.nav.map(item =>
          <li key={item.title} className={cx('item')}>
            <Link to={item.route} activeClassName={cx('active')}>
              <span className={item.icon} />
              <div className={cx('title')}>{item.title}</div>
            </Link>
          </li>
        )}</ul>

        {this.props.children}
      </div>
    );
  }
}

Work.propTypes = {
  nav: PropTypes.array,
  slides: PropTypes.array,
  tech: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  id: PropTypes.number,
  thumbnails: PropTypes.array,
  mounted: PropTypes.bool,
  iOS: PropTypes.array,
  OSS: PropTypes.array
};

function mapStateToProps(state) {
  return {
    nav: state.work.nav,
    slides: state.work.project.slides,
    tech: state.work.project.tech,
    name: state.work.project.name,
    description: state.work.project.description,
    id: state.work.project.id,
    links: state.work.project.links,
    thumbnails: state.work.projectsNav,
    mounted: state.work.mounted,
    iOS: state.work.iOS,
    OSS: state.work.OOS
  }
}

export default connect(mapStateToProps)(Work);