export default React.createClass({
  setTimerToHide() {
    setTimeout(() => {
      this.setState({
        hidden: true
      });
    }, 2500);
  },
  getDefaultProps() {
    return {
      logo: require('images/site/ev-av.png')
    };
  },
  getInitialState() {
    return {
      display: 'animated',
      hidden: false
    };
  },
  componentDidMount() {
    this.setTimerToHide();

    return this.setState({
      display: 'animated fadeOut'
    });
  },
  render() {
    const hiddenClass = this.state.hidden ? 'hidden' : '';

    return (
      <div className={`spinner ${this.state.display} ${hiddenClass}`}>
        <div className='animation'></div>
        <div className='spinner-logo'>
          <img className='spinner-image' src={this.props.logo}/>
        </div>
      </div>
    );
  }
});