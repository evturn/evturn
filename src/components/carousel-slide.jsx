export default React.createClass({
  getInitialState() {
    return {
      active: this.props.active,
      image: this.props.image
    };
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      active: newProps.active,
      image: newProps.image
    });
  },
  render() {
    const {image, active} = this.state;

    return (
      <div className={`slide ${active}`}>
        <img src={image} />
      </div>
    );
  }
});