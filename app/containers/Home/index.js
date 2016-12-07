import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import A from 'components/A'
import Img from 'components/Img'
import Video from 'components/Video'
import LoadingIndicator from 'components/LoadingIndicator'
import * as Actions from 'api/actions'
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
                src={this.props.initialized && !this.props.playing ? this.props.fallback : null}
              />
            : null
          }

          <Video
            {...this.props }
            className={cx({
              none: this.props.done && !this.props.playing
            })}
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

  static propTypes = {
    items: PropTypes.array,
    ready: PropTypes.bool,
    done: PropTypes.bool,
    sections: PropTypes.array,
    initialized: PropTypes.bool,
    playing: PropTypes.bool,
    fallback: PropTypes.string,
    src: PropTypes.string,
  }

}

export default connect(
  state => ({
    items: state.video.items,
    ready: state.video.ready,
    done: state.video.done,
    sections: state.site.sections,
    initialized: state.video.initialized,
    playing: state.video.playing,
    fallback: state.video.fallback,
    src:  state.video.src,
  }),
  Actions)(Home)
