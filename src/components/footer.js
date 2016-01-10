export default React.createClass({
  getDefaultProps() {
    return {
      text: '© 2015 evturn.com built with ',
      icon: 'icon devicon-react-plain-wordmark'
    };
  },
  shouldApplyBlend(props) {
    return props.page === 'contact' ? <div className='blend'></div> : null;
  },
  getInitialState() {
    return {
      page: `footer-${this.props.page}`,
      blend: this.shouldApplyBlend(this.props),
      classname: this.props.classname
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: `footer-${nextProps.page}`,
      blend: this.shouldApplyBlend(nextProps),
      classname: nextProps.classname
    });
  },
  render() {
    return (
      <footer className={`${this.state.page} ${this.state.classname}`}>
        {this.state.blend}
        <div className='footer-text'>
          <span className='copyright'>{this.props.text}</span>
          <span className={this.props.icon}></span>
        </div>
      </footer>
    );
  }
});