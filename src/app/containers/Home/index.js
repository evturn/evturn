import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { mountPlayer, unmountPlayer } from 'containers/Home/actions'

import Spinner from 'components/Spinner'

import css from './style.less'

class Home extends Component {
  componentDidMount() {
    this.props.mountPlayer(this.player)
  }

  componentWillUnmount() {
    this.props.unmountPlayer()
  }

  render() {

    return (
      <div className={css.root}>


          <div className={css.video}
            style={{backgroundImage: `url(${require('site-images/banana-plants.png')})`}}>
            <video
              ref={player => this.player = player}
              poster={require('site-images/transparent.png')}
              type="video/mp4"
              preload="auto"
              autoPlay={true}
              muted={true}
              src={this.props.src}
            />
            <div className={css.title}>
              <img src="dist/img/title-white.svg" />
              <div className={css.subtitle} />
            </div>
            <div className={css.overlay} />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  src: PropTypes.string
}

const mapStateToProps = ({ video }) => ({
  src:  video.src
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
