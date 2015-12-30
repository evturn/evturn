export default React.createClass({
  onLoaded() {
    document.addEventListener('load', () => {
      return this.setState({
        hidden: true
      });
    })

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
    this.onLoaded();

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