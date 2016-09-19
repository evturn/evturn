import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import A from 'components/A'
import Img from 'components/Img'
import VideoPlayer from './VideoPlayer'
import LoadingIndicator from 'components/LoadingIndicator'
import Sections from 'components/Sections'
import * as Actions from './actions'
import { selectRouteByTitle } from '../../reducers/route'
import av from 'images/site/ev-av.svg'
import skel from 'images/site/skel.gif'
import title from 'images/site/title-white.svg'
import css from './style.css'

const cx = classNames.bind(css)

class Home extends Component {
  constructor(props) {
    super(props)
    this.image = new Image()
  }

  componentWillMount() {
    this.image.src = this.props.fallback
  }

  render() {
    return (

      <div className={css.root}>
        <div className={css.fullpage}>
          {this.props.done && !this.props.playing
            ? <Img
                className={css.fallback}
                src={this.props.done && !this.props.playing ? this.props.fallback : null}
              />
            : null
          }

          <VideoPlayer
            className={cx({
              none: this.props.done && !this.props.playing,
            })}
            items={this.props.items}
            ready={this.props.ready}
            done={this.props.done}
          />

          <LoadingIndicator
            img={skel}
            ready={this.props.ready}
            done={this.props.done}
          />

          <div className={css.cover}>
            <div className={cx('title', {
              wait: !this.props.done && !this.props.initialized,
              yield: this.props.done && this.props.initialized,
            })}>
              <Img src={title} />
              <div className={css.subtitle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  mobileContentLink: PropTypes.string,
  items: PropTypes.array,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  sections: PropTypes.array,
  initialized: PropTypes.bool,
  playing: PropTypes.bool,
  fallback: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    mobileContentLink: selectRouteByTitle(state, 'Projects'),
    items: state.video.items,
    ready: state.video.ready,
    done: state.video.done,
    sections: state.site.sections,
    initialized: state.video.initialized,
    playing: state.video.playing,
    fallback: state.video.fallback,
  }
}

export default connect(mapStateToProps)(Home)
