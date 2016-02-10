import React from 'react';

export default class FontIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span className={`fa ${this.props.name}`}></span>;
  }
}