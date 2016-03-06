import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setProject } from '../actions/project';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/work.less';
import WorkWeb from '../components/WorkWeb';
import { UnorderedList, ListItem } from '../components/reuseables';

const cx = classNames.bind(styles);

class Work extends Component {
  constructor(props) {
    super(props);

    this.header = [
      {
        title: 'Web',
        route: 'work/web',
        icon: 'fa fa-laptop'
      },{
        title: 'iOS',
        route: 'work/ios',
        icon: 'fa fa-mobile'
      },{
        title: 'Open Source',
        route: 'work/oss',
        icon: 'fa fa-code-fork'
      }
    ];
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
        <UnorderedList className={cx('categories')}>{this.header.map(item => {
          const { route, icon, title } = item;

          return (
            <ListItem key={title} className={cx('item')}>
              <Link to={route} activeClassName={cx('active')}>
                <span className={icon} />
                <div className={cx('title')}>{title}</div>
              </Link>
            </ListItem>
          );

        })}</UnorderedList>

        {this.props.children}
      </div>
    );
  }
}

Work.propTypes = {
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