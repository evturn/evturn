import React, { Component, Children, PropTypes } from 'react'

export class LazyLoad extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    loaded: false
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modules === this.props.modules) {
      return null
    }
    this.load(nextProps)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  load(props) {
    this.setState({loaded: false})
    const { modules } = props
    const keys = Object.keys(modules)

    Promise.all(keys.map(key => modules[key]()))
      .then(values => keys.reduce((acc, x, i) => {
          acc[x] = values[i]
          return acc
        }, {}))
      .then(modules => {
        if (!this.mounted) {
          return null
        }
        this.setState({ modules, loaded: true })
      })
  }

  render() {
    const { modules, loaded } = this.state
    const { children } = this.props
    return !loaded
      ? null
      : Children.only(children(modules))
  }
}

export const importDefault = res => (
  res.then(module => module.default)
)

export default LazyLoad