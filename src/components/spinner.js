export default React.createClass({
  getDefaultProps() {
    return { image: 'src/assets/images/site/ev-av.png' };
  },
  getInitialState() {
    return {
      animation: '',
      ready: false
    };
  },
  componentDidMount() {
    setTimeout(() => this.removeSpinner(), 2000);
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
  removeSpinner() {
    this.setState({
      ready: true,
      animation: 'animated fadeOut'
    });

    setTimeout(() => this.setState({ animation: 'hidden' }), 1000);
  }
});