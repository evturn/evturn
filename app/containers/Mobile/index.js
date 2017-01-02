import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
import css from './style.css'

export class Mobile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.root}>
        <PageHeader text='Mobile' />
        <div className={css.items}>
          {projects.map(x =>
            <div className={css.item} key={x.name}>
              <div className={css.title}>{x.name}</div>
              <img src={x.image} className={css.img} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const projects = [
  {name: 'Troposphere',   image: 'ios-troposphere.png',   bottom: true },
  {name: 'Confectionery', image: 'ios-confectionery.png', top: true},
  {name: 'Mixtape',       image: 'ios-mixtape.png',       bottom: true},
  {name: 'Stratosphere',  image: 'ios-stratosphere.png',  top: true},
  {name: 'Dumb Facts',    image: 'ios-dumb-facts.png',    bottom: true}
].map(x => ({...x, image: require(`public/images/${x.image}`)}))

export default Mobile
