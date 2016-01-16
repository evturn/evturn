import React from 'react';

export default class StatCounter extends React.Component {
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
    return <div className={this.props.classname}>{this.state.count}</div>;
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

