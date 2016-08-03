import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as Actions from 'containers/Projects/actions'

import Details from './Details'
import Carousel from './Carousel'
import Thumbnails from './Thumbnails'

import css from './style.css'

class Web extends Component {
  componentWillMount() {
    this.props.mountCarousel(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.mountCarousel(nextProps.params.id)
    }
  }

  componentWillUnmount() {
    this.props.unmountCarousel()
  }

  render () {
    const project = this.props.projects
      .filter(x => x.slug === this.props.slug)
      .map(project => ({
        ...project,
        tech: project.tech
          .map(x => this.props.tech.filter(y => y.slug === x)[0])
      }))[0]

    return (
      <div>
        <div className={css.slideshow}>
          {project
            ? <div>
                <Carousel
                  images={project.images}
                  slide={this.props.slide}
                />
                <Details {...project} />
              </div>
            : null
          }
        </div>

        <Thumbnails
          projects={this.props.projects}
          slug={this.props.slug}
        />
      </div>
    )
  }
}

Web.propTypes = {
  projects: PropTypes.array,
  slug: PropTypes.string,
  slide: PropTypes.number,
  tech: PropTypes.array,
}

const mapStateToProps = state => ({
  projects: state.projects.web.items,
  slug: state.projects.web.slug,
  slide: state.projects.web.slide,
  tech: state.tech,
})

const mapDispatchToProps = dispatch => ({
  mountCarousel:  slug => dispatch(Actions.mountCarousel(slug)),
  unmountCarousel: _ => dispatch(Actions.unmountCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Web)
