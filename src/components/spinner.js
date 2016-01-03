export const Spinner = React.createClass({
  getDefaultProps() {
    return {
      image: 'src/assets/images/site/ev-av.png'
    };
  },
  getInitialState() {
    return {
      display: '',
      hidden: '',
      contentReady: this.props.contentReady
    };
  },
  componentWillReceiveProps(nextProps) {
    if (this.state.contentReady !== nextProps.contentReady) {
      return this.setState({
        contentReady: nextProps.contentReady,
        hidden: 'hidden'
      });
    }
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