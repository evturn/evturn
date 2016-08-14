import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Details from './Details'
import Carousel from './Carousel'
import Thumbnails from './Thumbnails'
import * as Actions from 'containers/Projects/actions'

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
    return (
      <div>
        <div className={css.slideshow}>
          {this.props.project
            ? <div>
                <Carousel
                  images={this.props.project.images}
                  slide={this.props.slide}
                />
                <Details {...this.props.project} />
              </div>
            : null
          }
        </div>

        <Thumbnails
          projects={this.props.items}
          slug={this.props.slug}
        />
      </div>
    )
  }
}

Web.propTypes = {
  project: PropTypes.object,
  items: PropTypes.array,
  slug: PropTypes.string,
  slide: PropTypes.number,
  tech: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    project: state.projects.web.project,
    items: state.projects.web.items,
    slug: state.projects.web.slug,
    slide: state.projects.web.slide,
  }
}

const mapDispatchToProps = dispatch => ({
  mountCarousel: slug => dispatch(Actions.mountCarousel(slug)),
  unmountCarousel: _ => dispatch(Actions.unmountCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Web)
