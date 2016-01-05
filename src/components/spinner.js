export const Spinner = React.createClass({
  getDefaultProps() {
    return { image: 'src/assets/images/site/ev-av.png' };
  },
  getInitialState() {
    return {
      animation: '',
      ready: this.props.ready
    };
  },
  componentWillReceiveProps(nextProps) {
    if (this.state.ready) {
      return;
    } else if (nextProps.ready === true && this.state.animation === '') {
      this.setState({
        ready: nextProps.ready,
        animation: 'animated fadeOut'
      });
    }

    setTimeout(() => this.setState({ animation: 'hidden' }), 2000);
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
  }
});