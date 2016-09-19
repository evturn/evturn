import React, { Component } from 'react'
import css from './style.css'

export default class Console extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: { key: 0, val: 0 },
      items: props.items,
    }
  }

  componentDidMount() {
    this.setWidth(this.props.items)
    window.addEventListener('resize', _ => this.setWidth(this.props.items))
  }

  setWidth(items) {
    const pixels = window.innerWidth < 568 ? 12 : 20
    const padding = pixels > 12 ? 60 : 40
    const { key, val } = items
      .map(x => ({
        key: x.key.length * pixels,
        val: x.value.length * pixels,
      }))
      .reduce((acc, x) => {

        if (x.key > acc.key) {
          acc.key = x.key
        }
        if (x.val > acc.val) {
          acc.val = x.val
        }

        return acc
      }, { key: 0, val: 0 })

    this.setState({
      width: {
        key: key + 'px',
        val: val + 'px',
        list: (key + val + padding) + 'px'
      }
    })
  }

  render() {
    return (
      <div className={css.console}>
        <div
          className={css.list}
          style={{ width: this.state.width.list }}>
          <ul className={css.table}>
            {this.props.items.map((x, i) =>
              <li key={i}
                className={css.item}>
                <div
                  className={css.key}
                  style={{ width: this.state.width.key }}>
                  {x.key}:
                </div>
                <div
                  className={css.val}
                  style={{ width: this.state.width.val }}>
                  {x.value}
                </div>
              </li>
            )}
          </ul>
          <div className={css.bg} />
        </div>
      </div>
    )
  }
}
