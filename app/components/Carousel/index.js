import React, { Component, PropTypes } from 'react'
import CarouselPanel from './CarouselPanel'
import CarouselSlides from './CarouselSlides'
import CarouselDock from './CarouselDock'

export default class Carousel extends Component {
  static propTypes = {
    current: PropTypes.object,
    items: PropTypes.array,
    slug: PropTypes.string,
    slide: PropTypes.number,
  }

  componentWillMount() {
    this.props.onMount()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.slug !== nextProps.slug) {
      this.props.onMount()
    }
  }

  componentWillUnmount() {
    this.props.onUnmount()
  }

  render () {
    return (
      <div>
        <div className={this.props.className}>
          {this.props.current
            ? <div>
                <CarouselSlides
                  images={this.props.current.images}
                  slide={this.props.slide}
                />
                <CarouselPanel {...this.props.current} />
              </div>
            : null
          }
        </div>

        <CarouselDock
          projects={this.props.items}
          slug={this.props.slug}
        />
      </div>
    )
  }
}

