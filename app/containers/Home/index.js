import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeVideo from './HomeVideo'
import LoadingIndicator from 'components/LoadingIndicator'
import Logo from 'components/Logo'
import css from './style.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.onVideoChange = ::this.onVideoChange
  }

  state = {loading: true}

  onVideoChange(nextState) {
    this.setState(nextState)
  }

  render() {
    const { loading } = this.state
    return (
      <div className={css.root}>
        <HomeVideo onVideoChange={this.onVideoChange} />
        <div className={css.flex}>
        {loading
          ? <LoadingIndicator />
          : <Logo className={css.logo} />}
        </div>
      </div>
    )
  }
}

export default connect(null)(Home)
