import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { skipVideoInitialization } from 'containers/Home/actions'

import css from './style.less'

export const ProjectSections = ({ sections }) => (
  <div className={css.nav}>
    <div className={css.sections}>
      <ul className={css.ul}>{sections.map((x, i) =>
        <li key={i} className={css.li}>
          <Link to={x.route} activeClassName={css.active}>
            <span className={x.icon} />
            <div className={css.name}>{x.title}</div>
          </Link>
        </li>
      )}</ul>
    </div>
  </div>
)

class Projects extends Component {
  componentDidMount() {
    if (!this.props.initialized) {
      this.props.skipVideoInitialization(1000)
    }
  }

  render() {
    return (
      <div className={css.projects}>
        <ProjectSections sections={this.props.nav} />
        {this.props.children}
      </div>
    )
  }
}

Projects.propTypes = {
  nav: PropTypes.array,
  params: PropTypes.object,
  iOS: PropTypes.array,
  OSS: PropTypes.array,
  initialized: PropTypes.bool
}

const mapStateToProps = ({ site, video }) => ({
  nav: site.work.nav,
  iOS: site.work.iOS,
  OSS: site.work.OSS,
  initialized: video.initialized
})

const mapDispatchToProps = dispatch => ({
  skipVideoInitialization: duration => (
    dispatch(skipVideoInitialization(duration))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
