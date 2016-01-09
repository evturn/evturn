import {Component} from 'react';
import {Link} from 'react-router';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={this.props.classname}>
        <Link to={this.props.path}>
          <div className='frame'>
            <img src={this.props.image} />
            <div className='shadow' />
          </div>
        </Link>
      </li>
    );
  }
}