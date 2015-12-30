export default React.createClass({
  getInitialState() {
    return {
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      this.setState({
        open: newProps.open
      });
    }
  },
  render() {
    const openClass = this.state.open ? 'overlay' : '';

    return <div className={openClass} onClick={this.handleClick} />;
  }
});