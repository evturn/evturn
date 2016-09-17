import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Carousel from 'components/Carousel'
import * as Actions from 'containers/Projects/actions'
import css from './style.css'

class Web extends Component {
  onCarouselMount() {
    this.props.mountCarousel(this.props.slug)
  }

  onCarouselUnmount() {
    this.props.unmountCarousel()
  }

  render () {
    return (
      <Carousel
        className={css.slideshow}
        onMount={::this.onCarouselMount}
        onUnmount={::this.onCarouselUnmount}
        current={this.props.current}
        slide={this.props.slide}
        items={this.props.items}
        slug={this.props.slug}
      />
    )
  }
}

Web.propTypes = {
  current: PropTypes.object,
  items: PropTypes.array,
  slug: PropTypes.string,
  slide: PropTypes.number,
}

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.projects.web.project,
    items: state.projects.web.items,
    slug: ownProps.params.slug,
    slide: state.projects.web.slide,
  }
}

const mapDispatchToProps = dispatch => ({
  mountCarousel: slug => dispatch(Actions.mountCarousel(slug)),
  unmountCarousel: _ => dispatch(Actions.unmountCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Web)
