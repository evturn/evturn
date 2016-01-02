export default React.createClass({
  onLoaded() {
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
      setTimeout(() => {
        return this.setState({
          hidden: 'hidden'
        });
      }, 2000);
    });
  },
  getDefaultProps() {
    return {
      image: 'src/assets/images/site/ev-av.png'
    };
  },
  getInitialState() {
    return {
      display: '',
      hidden: ''
    };
  },
  componentWillMount() {
    return this.onLoaded();
  },
  componentDidMount() {
    return this.setState({
      display: 'fadeOut'
    });
  },
  render() {
    const {image} = this.props;
    const {display, hidden} = this.state;

    return (
      <div className={`spinner animated ${display} ${hidden}`}>
        <div className='animation'></div>
        <div className='spinner-logo'>
          <img className='spinner-image' src={image} />
        </div>
      </div>
    );
  }
});