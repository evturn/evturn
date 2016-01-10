import {Component} from 'react';

export default class Spinner extends Component {
  constructor(props) {
    super(props);

    this.image = 'src/assets/images/site/ev-av.png';
    this.state = {
      animation: 'spinner',
      ready: false
    };
  }
  componentDidMount() {
    setTimeout(() => this.removeSpinner(), 2000);
  }
  render() {
    return (
      <div className={this.state.animation}>
        <div className='animation'></div>
        <div className='spinner-logo'>
          <img className='spinner-image' src={this.image} />
        </div>
      </div>
    );
  }
  removeSpinner() {
    this.setState({
      ready: true,
      animation: 'spinner animated fadeOut'
    });

    setTimeout(() => this.setState({ animation: 'hidden' }), 1000);
  }
}