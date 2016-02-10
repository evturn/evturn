import React, { Component } from 'react';

export default class StatCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  componentDidMount() {
    this.increment();
  }
  componentWillUnmount() {
    clearTimeout(this.incTimer);
  }
  render() {
    const font = {
      fontSize: '23px',
      lineHeight: '55px'
    };

    return <div style={font}>{this.state.count}</div>;
  }
  increment() {
    if (this.state.count >= this.props.number) {
      return this.setState({ count: this.props.number });
    } else {
      this.incTimer = setTimeout(() => {
        this.setState({ count: this.state.count + 50 });
        this.increment();
      }, 50);
    }
  }
}

