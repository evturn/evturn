import React, {Component} from 'react';


export default class Slide extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className={this.props.classname}>
        <img src={this.props.image} />
      </div>
    );
  }
}