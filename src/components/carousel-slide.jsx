export default React.createClass({
  getInitialState() {
    return {
      active: this.props.active,
      next: this.props.next
    };
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      active: newProps.active,
      next: newProps.next
    });
  },
  render() {
    const {
      image,
      active
    } = this.props;
    const activeClass = active ? 'active' : 'slide';

    return (
      <div className={activeClass}>
        <img className="img-scale" src={image} />
      </div>
    );
  }
});