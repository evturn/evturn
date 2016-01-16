import React from 'react';

export default class StatCounter extends React.Component {
  constuctor(props) {

    this.state = { count: 0 };
  }
  componentDidMount() {
    return this.increment();
  }
  componentWillUnmount() {
    return clearTimeout(this.incTimer);
  }
  render() {
    return <span>{this.state.count}</span>;
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

