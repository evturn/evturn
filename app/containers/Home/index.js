import React, { Component, PropTypes } from 'react'
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

class Home extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.fullpage}>
          <VideoPlayer
            className={css.player}
            items={this.props.items}
            ready={this.props.ready}
            done={this.props.done}
          />
          <LoadingIndicator
            img={skel}
            ready={this.props.ready}
            done={this.props.done}
          />
          <div className={css.sections}>
            <Sections sections={this.props.sections} />
          </div>
          <div className={css.cover}>
            <div className={`${css.title} ${!this.props.done && !this.props.initialized ? css.wait : css.yield}`}>
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
}

const mapStateToProps = state => {
  return {
    mobileContentLink: selectRouteByTitle(state, 'Projects'),
    items: state.video.items,
    ready: state.video.ready,
    done: state.video.done,
    sections: state.site.sections,
    initialized: state.video.initialized,
  }
}

export default connect(mapStateToProps)(Home)
