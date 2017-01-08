import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
import css from './style.css'

export class Mobile extends Component {
  static defaultProps = {
    projects: [
      {name: 'Troposphere',   image: 'ios-troposphere.png' },
      {name: 'Confectionery', image: 'ios-confectionery.png'},
      {name: 'Mixtape',       image: 'ios-mixtape.png'},
      {name: 'Stratosphere',  image: 'ios-stratosphere.png'},
      {name: 'Dumb Facts',    image: 'ios-dumb-facts.png'}
    ]
  }

  render() {
    const { projects } = this.props
    return (
      <div className={css.root}>
        <PageHeader text='Mobile' />
        <div className={css.items}>
          {projects.map(x =>
            <div className={css.item} key={x.name}>
              <div className={css.title}>{x.name}</div>
              <img src={require(`public/images/${x.image}`)} className={css.img} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Mobile
