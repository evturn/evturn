import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeVideo from './HomeVideo'
import LoadingIndicator from 'components/LoadingIndicator'
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
        {loading ? <LoadingIndicator /> : null}
      </div>
    )
  }
}

export default connect(null)(Home)
