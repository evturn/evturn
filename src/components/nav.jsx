export default React.createClass({
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.initialOpen
    };
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      this.setState({
        open: newProps.open
      });
    }

    if (this.state.page !== newProps.page) {
      this.setState({
        page: newProps.page
      });
    }

  },
  render() {
    const {page} = this.state;
    const logo = `logo-${page}`;
    const burger = `burger-${page}`;

    return (
      <div>
        <div className={logo}>
          <img className='img-scale' src='src/images/site/ev-av.png' />
        </div>
        <div className={burger} onClick={this.handleClick}>
          <span className='fa fa-bars'></span>
        </div>
      </div>
    );
  }
});