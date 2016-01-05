export const Spinner = React.createClass({
  getDefaultProps() {
    return {
      image: 'src/assets/images/site/ev-av.png'
    };
  },
  getInitialState() {
    return {
      animation: '',
      spinning: this.props.spinning
    };
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.spinning === false) {
      this.setState({spinning: nextProps.spinning});
      this.endAnimation();
    }
  },
  render() {
    return (
      <div className={`spinner ${this.state.animation}`}>
        <div className='animation'></div>
        <div className='spinner-logo'>
          <img className='spinner-image' src={this.props.image} />
        </div>
      </div>
    );
  },
  endAnimation() {
    this.setState({animation: 'animated fadeOut'});
    setTimeout(() => this.hideSpinner(), 2000);
  },
  hideSpinner() {
    this.setState({animation: 'hidden'});
  }
});