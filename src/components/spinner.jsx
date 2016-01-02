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
    return this.setState({
      contentReady: nextProps.contentReady
    });
  },
  removeFromDOM() {
    return this.setState({
      display: 'animated fadeOut'
    });
  },
  render() {
    const {image} = this.props;
    const {contentReady} = this.state;
    const display = contentReady ? this.removeFromDOM() : null;

    return (

        <div className={`spinner ${display}`}>
          <div className='animation'></div>
          <div className={`spinner-logo ${display}`}>
            <img className='spinner-image' src={image} />
          </div>
        </div>

    );
  }
});