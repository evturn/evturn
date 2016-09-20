import React from 'react'
import Img from 'components/Img'
import Footer from 'components/Footer'
import css from './style.css'

export default props => {
  return (
    <div className={css.mobile}>
      <ul className={css.items}>
        {props.ios.items.map(x =>
          <li
            key={x.name}
            className={css.item}>
            <div className={css.name}>{x.name}</div>
            <Img src={require(`images/work/${x.image}`)} />
          </li>
        )}
      </ul>
      <Footer />
    </div>
  )
}
