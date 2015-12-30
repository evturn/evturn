export default React.createClass({
  getInitialState() {
    return {
      active: this.props.active,
      next: this.props.next,
      image: this.props.image
    };
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      active: newProps.active,
      next: newProps.next,
      image: newProps.image
    });
  },
  render() {
    const {
      image,
      active
    } = this.state;
    const activeClass = active ? 'active' : 'slide';

    return (
      <div className={activeClass}>
        <img className="img-scale" src={`${image}`}/>
      </div>
    );
  }
});