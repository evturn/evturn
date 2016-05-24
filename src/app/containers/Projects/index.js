import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import css from './style.less'

const ProjectsMenu = ({ sections }) => (
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
  render() {
    return (
      <div className={css.projects}>
        <ProjectsMenu sections={this.props.nav} />
        {this.props.children}
      </div>
    )
  }
}

Projects.propTypes = {
  nav: PropTypes.array,
  params: PropTypes.object,
  iOS: PropTypes.array,
  OSS: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  nav: site.work.nav,
  iOS: site.work.iOS,
  OSS: site.work.OSS,
})

export default connect(mapStateToProps)(Projects)
