export default React.createClass({
  onLoaded() {
    window.addEventListener('DOMContentLoaded', () => {
      return this.setState({
        hidden: true
      });
    });
  },
  getInitialState() {
    return {
      display: 'animated',
      hidden: false
    };
  },
  componentWillMount() {
    return this.onLoaded();
  },
  componentDidMount() {
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
          <img className='spinner-image' src='src/images/site/ev-av.png'/>
        </div>
      </div>
    );
  }
});