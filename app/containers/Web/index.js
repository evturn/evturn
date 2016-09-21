import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import A from 'components/A'
import Img from 'components/Img'
import Carousel from 'components/Carousel'
import Footer from 'components/Footer'
import * as Actions from './actions'
import css from './style.css'

const cx = classNames.bind(css)

class Web extends Component {
  componentDidMount() {
    this.props.mountCarousel(this.props.params.slug)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.slug !== nextProps.params.slug) {
      this.props.mountCarousel(nextProps.params.slug)
    }
  }

  componentWillUnmount() {
    this.props.unmountCarousel()
  }

  render () {
    return (
      <div className={css.web}>
        {this.props.current
          ? <Carousel
              {...this.props.current}
              images={this.props.current.images}
              slide={this.props.slide}
            />
          : null
        }
        <div className={css.projects}>
          <ul className={css.ul}>
            {this.props.items.map(x =>
              <li
                key={x.slug}
                className={cx('thumb', {
                  active: x.slug === this.props.slug
                })}>
                <A pathname={`/work/web/${x.slug}`}>
                  <Img src={require(`images/work/${x.thumbnail}`)} />
                  <div className={css.overlay} />
                </A>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  static propTypes = {
    current: PropTypes.object,
    items: PropTypes.array,
    slug: PropTypes.string,
    slide: PropTypes.number,
  }
}

export default connect(
  (state, ownProps) => ({
    current: state.projects.web.project,
    items: state.projects.web.items,
    slug: ownProps.params.slug,
    slide: state.projects.web.slide,
  }),
  Actions)(Web)
