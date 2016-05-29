import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sections from 'components/Sections'
import Footer from 'components/Footer'
import { createSlideshow, tearDownCarousel } from 'containers/Projects/actions'

import css from './style.css'

class Projects extends Component {
  componentWillMount() {
    const { createSlideshow, params } = this.props
    createSlideshow(params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { createSlideshow, params } = this.props

    if (params.id !== nextProps.params.id) {
      createSlideshow(nextProps.params.id)
    }
  }

  componentWillUnmount() {
    const { tearDownCarousel } = this.props
    tearDownCarousel()
  }

  render() {
    return (
      <div className={`${css.root} ${css.wrap}`}>
        <Sections sections={this.props.nav} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Projects.propTypes = {
  children: React.PropTypes.node,
  params: PropTypes.object,
  nav: PropTypes.array,
  params: PropTypes.object,
  iOS: PropTypes.array,
  OSS: PropTypes.array,
}

const mapStateToProps = ({ site }) => ({
  nav: site.work.nav,
  iOS: site.work.iOS,
  OSS: site.work.OSS,
})

const mapDispatchToProps = dispatch => ({
  createSlideshow: id => dispatch(createSlideshow(id)),
  tearDownCarousel: _ => dispatch(tearDownCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
