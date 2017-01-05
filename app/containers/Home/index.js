import React, { Component } from 'react'
import HomeVideo from './HomeVideo'
import LoadingIndicator from 'components/LoadingIndicator'
import Brushstroke from 'components/Icons/Brushstroke'
import Logo from 'components/Logo'
import css from './style.css'

class Home extends Component {
  state = {loading: true}

  onVideoChange = nextState => {
    this.setState(nextState)
  }

  render() {
    const { loading } = this.state
    return (
      <div className={css.root}>
        <HomeVideo onVideoChange={this.onVideoChange} />
        <div className={css.overlay}>
          <div className={css.mid}>
            {loading
              ? <LoadingIndicator />
              :  <div>
                  <div className={css.stroke}>
                    <Brushstroke className={css.svg} />
                  </div>
                  <Logo className={css.logo} />
                </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
