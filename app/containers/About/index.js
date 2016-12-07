import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Img from 'components/Img'
import SVGIcon from 'components/Icons'
import img from 'images/site/ev-av.svg'
import css from './style.css'

class About extends Component {
  render() {
    return (
      <div className={css.about}>

        <div className={css.info}>
          <div className={css.av}>
            <div className={css.image}>
              <Img src={img} />
            </div>
          </div>

          <div className={css.details}>
            <div className={css.copy}>
              <div className={css.title}>Development</div>
              <div className={css.text}>{this.props.copy}</div>
            </div>
            <div className={css.tech}>
              <ul className={css.list}>
                {this.props.tools.map((x, i) =>
                  <li key={i} className={css.item}>
                    <SVGIcon name={x} />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className={css.contact}>
          <div className={css.title}>Contact</div>

          <ul className={css.links}>
            {this.props.contact.map((x, i) =>
              <li
                key={i}
                className={css.link}>
                <a
                  href={x.url}
                  target="_blank">
                  <span className={x.icon} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    tools: state.content.tools,
    copy: state.content.copy,
    contact: state.content.contact,
    sections: state.site.sections,
  })
)(About)
